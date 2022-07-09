<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    const lol = "hi";
    
    async function submit () {
        var response = await fetch("/api/db", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: document.getElementById("insert").value})
        })
        response = await response.json();
    }
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input id = "insert" type = "text" />
<button on:click={submit} >hello</button>
