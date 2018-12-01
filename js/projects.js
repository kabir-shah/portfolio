var scratchEmbed = document.getElementById("scratch-embed");

if (window.navigator.plugins.namedItem("Shockwave Flash")) {
    scratchEmbed.innerHTML = "<iframe allowtransparency=\"true\" width=\"300\" height=\"249\" src=\"https://scratch.mit.edu/projects/embed/244993005/?autostart=false\" frameborder=\"0\" allowfullscreen></iframe>";
} else {
    scratchEmbed.innerHTML = "<a href=\"https://get.adobe.com/flashplayer\">Enable Flash to view demo</a>";
}