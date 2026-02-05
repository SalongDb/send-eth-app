function Logo() {
    return (
        <div className="text-white">
            <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="100" cy="100" r="96" fill="#111" />

                <text
                    x="100"
                    y="78"
                    text-anchor="middle"
                    fill="#FFFFFF"
                    font-size="42"
                    font-weight="700"
                    letter-spacing="6"
                    font-family="Inter, Arial, sans-serif"
                >
                    SEA
                </text>

                <path
                    d="M20 115 C60 100, 140 130, 180 115"
                    stroke="#FFFFFF"
                    stroke-width="6"
                    fill="none"
                    opacity="0.9"
                />

                <polygon points="100,88 82,120 100,130 118,120" fill="#D1D5DB" />
                <polygon points="100,135 82,122 100,160 118,122" fill="#9CA3AF" />

                <polygon
                    points="140,95 175,80 165,115"
                    fill="#FFFFFF"
                />
            </svg>

        </div>
    )
}

export default Logo;
