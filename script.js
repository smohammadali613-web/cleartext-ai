async function commandGenerator() {
    const output = document.getElementById("output");
    output.innerText = "Loading...";

    try {
        const response = await fetch("https://b6j2gj5ta4k4ffiezheiszgtyu0nlpji.lambda-url.ap-south-1.on.aws/");
        const data = await response.json();

        output.innerText =
            "Service: " + data.service + "\n\n" +
            data.message + "\n\n" +
            "Example Commands:\n- " +
            data.example_commands.join("\n- ");
    } catch (error) {
        output.innerText = "Backend error!";
        console.error("ERROR:", error);
    }
}
