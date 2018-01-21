//TODO: Implement hexToRgb
export function hexToRgb(hex: string): { "r": number, "g": number, "b": number } {
    if (hex.length === 3)
        return hexToRgb(`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`);

    let r = hex.substring(0, 2),
        g = hex.substring(2, 4),
        b = hex.substring(4, 6);
    return { "r": parseInt(r, 16), "g": parseInt(g, 16), "b": parseInt(b, 16) };
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number = 0, g: number = 0, b: number = 0): string {
    return [r, g, b].map(v => {
        if (v > 255) v = 255
        else if (v < 0) v = 0;

        let hex = v.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }).join('');
}
