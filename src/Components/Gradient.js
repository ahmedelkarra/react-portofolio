function GradientSVG() {
    const idCSS = "color";
    const gradientTransform = `rotate(90)`;
    return (
        <svg style={{ height: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="16.29%" stopColor="#FF3CAC" />
                    <stop offset="85.56%" stopColor="#2B86C5" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default GradientSVG;


// background-color: #FF3CAC;
// background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
