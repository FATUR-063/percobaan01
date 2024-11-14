document.getElementById("tombol").addEventListener("click", function() {
    document.getElementById("salam").innerText = "Terima kasih";
});
document.getElementById("dark").addEventListener("click", function() {
    document.getElementById("mode").style.background="grey";
    document.getElementById("bodym").style.background="lightgrey";
    document.getElementById("h1m").style.color="white";
});