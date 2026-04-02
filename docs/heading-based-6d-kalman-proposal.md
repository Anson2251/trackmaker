# Heading-Based 6D Kalman Proposal

## Summary

This document captures a future direction for the geolocation Kalman filter: a 6D model that treats heading and yaw rate as first-class state rather than trying to infer all turning behavior from `vx/vy` and linear acceleration alone.

This is intentionally a proposal, not an immediate implementation plan.

## Why This Looks Promising

The current 4D model is pragmatic for a GPS-assisted tracker:

- state: `[x, y, vx, vy]`
- GPS remains available, so long-term dead reckoning is not the main goal
- short-term smoothness and turn response matter more than long-range inertial propagation

The main weakness observed so far is not long-term drift, but turn response:

- velocity direction changes too slowly during rapid heading changes
- IMU acceleration alone is not always a strong or timely turning signal
- GPS heading is available, but the current state representation does not make it especially natural to use as a primary signal

Gyroscope data also looks more useful for short-term turn dynamics than for long-term standalone navigation.

## Proposed 6D State

Instead of extending the current Cartesian velocity model to include only acceleration states, the more promising 6D candidate is:

```text
[x, y, speed, heading, a_t, yaw_rate]
```

Where:

- `x, y`: local Cartesian position
- `speed`: scalar ground speed
- `heading`: travel direction
- `a_t`: tangential acceleration along the direction of travel
- `yaw_rate`: angular velocity around the vertical axis

## Why This State Is Attractive

This state lines up better with the sensors already available in the app:

- GPS position updates `x, y`
- GPS speed updates `speed`
- GPS heading updates `heading`
- IMU gyroscope `z` can inform `yaw_rate`
- IMU linear acceleration can inform `a_t` after projection or approximation

More importantly, it makes turn dynamics explicit:

- turning starts by changing `heading`
- gyro can immediately affect `yaw_rate`
- velocity direction is derived from `heading`, instead of waiting for `vx/vy` to rotate indirectly

That matches the actual problem better than a pure `[x, y, vx, vy, ax, ay]` extension.

## Expected Benefits

If this model is implemented well, it could improve:

1. Faster turn-in response when heading changes abruptly
2. Better short-window fusion of GPS heading and gyroscope yaw rate
3. Less zig-zag behavior caused by velocity direction lagging behind GPS observations
4. Cleaner semantics for GPS heading usage than the current 4D Cartesian state

## Why This Is Deferred

Even though this model looks promising, it is not currently the highest-value change.

Reasons:

1. GPS is usually available, so long-term inertial navigation is not the main product goal
2. Previous higher-dimensional Kalman attempts were worse in both quality and performance
3. A heading-based 6D model is more nonlinear than the current 4D model
4. This likely pushes the implementation toward EKF or another nonlinear formulation
5. Browser IMU quality is still limited, so model complexity can easily outrun sensor quality

In short: this looks like a good future experiment, but not the next change to prioritize.

## Suggested Implementation Path

If this direction is revisited, the implementation path should be staged:

1. Build and validate the model in the existing JavaScript worker first
2. Use real recordings to confirm that the heading-based 6D state is actually better than the current 4D filter
3. Only after the model is stable, migrate the worker core to Rust/WASM

This ordering matters because the model is still the main uncertainty. It is cheaper to iterate on state design, observation design, and noise tuning in the current worker architecture before locking the core into a lower-level implementation.

## Why Rust/WASM Still Makes Sense Later

If the heading-based 6D model proves worthwhile, a Rust/WASM worker core is a strong follow-up option.

Reasons:

1. The app already isolates Kalman execution behind a worker boundary
2. The current `KalmanWorkerClient` message protocol is already close to the kind of boundary a WASM-backed worker would need
3. Higher-dimensional filters increase compute cost enough that JS allocation pressure and GC jitter become more relevant
4. Even heavily in-place JavaScript implementations still carry runtime overhead that Rust can avoid more reliably

The likely migration target would be the worker core rather than the whole geolocation stack:

- keep provider integration, message wiring, and app-level control flow in TypeScript
- replace the predict/update/filter state machine inside the worker with Rust/WASM once the design is stable

That keeps the architecture change relatively small while still capturing most of the performance benefit.

## Why Not 8D First

An 8D state such as:

```text
[x, y, vx, vy, ax, ay, heading, yaw_rate]
```

looks expressive, but probably adds too much redundancy early on.

Main concern:

- both `heading` and `vx/vy` represent motion direction

That creates extra coupling and consistency problems:

- should `heading` always equal `atan2(vy, vx)`?
- if not, which one is authoritative?
- how should GPS heading update interact with Cartesian velocity direction?

For this reason, a heading-centered 6D model looks cleaner than jumping directly to 8D.

## Suggested Future Evaluation Criteria

If this proposal is revisited, evaluate it against the current 4D model using turn-heavy recordings.

Success criteria should focus on:

1. Reduced turn lag
2. Reduced zig-zag artifacts during sharp heading changes
3. Stable behavior with noisy browser IMU data
4. Acceptable worker and main-thread cost on weaker devices

## Current Decision

Do not implement this yet.

Keep the idea as a future direction if the current 4D GPS-assisted filter still cannot use heading and gyro well enough after smaller improvements.
