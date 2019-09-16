        var Pixel = function(x, y, clr, size) {
            var pixel = document.createElement("div");
            pixel.style.backgroundColor = clr + "";
            pixel.style.position = "absolute";
            pixel.style.left = x + "px";
            pixel.style.top = y + "px";
            pixel.style.width = size + "px";
            pixel.style.height = size + "px";
            pixel.className = "pixelcolor";
            document.body.appendChild(pixel);
        };
        Pixel(200, 200, "blue", 10);
