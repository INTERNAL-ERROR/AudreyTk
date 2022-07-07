

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form on:submit = {handleSubmit} name = "first">
    <input type = "text" name = "name">
   <input type="submit" value="Subscribe!">
</form>

<script>
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": event.target.getAttribute("name"),
          ...name,
        }),
      })
        .then(() => navigate("/"))
        .catch((error) => alert(error));
    };
</script>
