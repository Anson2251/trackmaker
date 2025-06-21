import { defineStore } from 'pinia'
import { UpdateService } from '@/libs/geolocation/update-service'
import { LocationResponseErrorEnum } from '@/libs/geolocation/types'
import type { GeographicPointType } from '@/libs/geolocation/types'

export const useGeolocationStore = defineStore('geolocation', {
    state: () => ({
        position: null as GeographicPointType | null,
        error: null as LocationResponseErrorEnum | null,
        isWatching: false,
        lastUpdated: null as number | null,
        watchHandlerId: null as number | null,
        service: new UpdateService()
    }),
    getters: {
        hasPosition: (state) => state.position !== null,
        coordinates: (state) => state.position || null,
        formattedGeoJSON: (state) => state.position ? {
            type: "Point" as const,
            coordinates: [state.position.longitude, state.position.latitude]
        } : null
    },
    actions: {
        async initialize() {
            if (this.$state.service.built) return;
            await this.service.build()
        },
        async getCurrentPosition() {
            try {
                await this.initialize()
                const position = await this.service.backend!.getCurrentPosition()
                this.position = position
                this.error = null
                this.lastUpdated = Date.now()
                return position
            } catch (error: any) {
                this.error = error?.code || LocationResponseErrorEnum.UNKNOWN
                throw error
            }
        },
        async startWatching() {
            if (this.isWatching) return

            await this.initialize()
            this.watchHandlerId = await this.service.start()
            this.isWatching = true

            this.service.addListener((position) => {
                this.position = position
                this.error = null
                this.lastUpdated = Date.now()
            })
        },
        stopWatching() {
            if (!this.isWatching || !this.watchHandlerId) return

            this.service.stop(this.watchHandlerId)
            this.isWatching = false
            this.watchHandlerId = null
        }
    }
})
