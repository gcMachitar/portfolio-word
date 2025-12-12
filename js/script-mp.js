// Shared JavaScript for MP1 & MP2

// MP1: Remove All Spaces
function replaceAllSpaces() {
    const input = document.getElementById("inputText").value;
    const result = input.replace(/\s/g, '');  // Remove ALL whitespace

    document.getElementById("output").innerHTML = `
        <strong>Input:</strong> ${input}<br><br>
        <strong>Output:</strong> <span style="color:#fff; font-size:3.2rem;">${result}</span>
    `;
}

// MP2: Search Word
function searchWord() {
    const sentence = document.getElementById("sentence").value.trim();
    const word = document.getElementById("word").value.trim();

    if (!sentence || !word) {
        document.getElementById("output").innerHTML = `<span style="color:#f66;">Please fill both fields!</span>`;
        return;
    }

    const found = sentence.includes(word);
    const status = found ? 
        `<span style="color:#0f0; font-size:4rem;">Found</span>` : 
        `<span style="color:#f66; font-size:4rem;">Not Found</span>`;

    document.getElementById("output").innerHTML = `
        <strong>Sentence:</strong> ${sentence}<br><br>
        <strong>Looking for:</strong> "${word}"<br><br>
        <strong>Result →</strong> ${status}
    `;
}
