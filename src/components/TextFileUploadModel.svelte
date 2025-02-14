<script lang="ts">
	import '../app.css';
	import { Fileupload, Modal, Textarea, Label } from "flowbite-svelte";

	let { opened = false } = $props();
	let file = $state("");
	let content = $state("");

	let fileuploadprops = {
		id: "user_avatar",
	};
</script>

<Modal
	bind:open={opened}
	size="xs"
	autoclose={false}
	class="w-full "
	classBackdrop="opacity-65"
>
	<form>
		<div>
			<Label class="pb-2">Upload file</Label>
			<Fileupload {...fileuploadprops} />
		</div>
		<Textarea
			id="file-content"
			placeholder="The content of the file would appear here…"
			class="mt-2"
			value={content}
		/>
	</form>
</Modal>
