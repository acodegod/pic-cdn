function fish() {
    return (
        $("#footer-wrap").css({
            position: "absolute",
            "text-align": "center",
            top: "-15px",
            right: 0,
            left: 0,
            bottom: 0,
        }),
        $("footer").append(
            '<div class="container" id="jsi-flying-fish-container"></div>'
        ),
        $("body").append(
            '<script src="https://cdn.jsdelivr.net/gh/acodegod/pic-cdn/2021/fish.js"></script>'
        ),
        this
    );
}
btf.isJqueryLoad(fish)
