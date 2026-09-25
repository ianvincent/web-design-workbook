const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const codeBlock = button
            .closest(".code-block")
            .querySelector("code");

        navigator.clipboard.writeText(codeBlock.innerText);

        button.textContent = "Copied!";

        setTimeout(function() {
            button.textContent = "Copy";
        }, 1500);

    });

});
