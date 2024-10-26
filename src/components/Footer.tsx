'use client'

export default function Footer() {
    return (
        <div className="mx-12 py-4 border-y-2 flex-column justify-between max-w-full md:flex text-xs sm:text-base">
            <div className="flex-column md:flex w-6/12">
                <div className="mb-4 lg:mb-0">
                    <p className="text-white mr-4">Connect with me </p>
                </div>
                <div className="flex pl-0 w-60 justify-between">
                    <svg
                        height="100%"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2,
                            cursor : "pointer",
                            fill:"white"
                        }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        className="pointer"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0H449.446Zm-288.985,423.278v-225.717h-75.04v225.717h75.04Zm270.539,0v-129.439c0-69.333 -37.018-101.586 -86.381-101.586 -39.804,0 -57.634,21.891 -67.617,37.266v-31.958h-75.021c0.995,21.181 0,225.717 0,225.717h75.02v-126.056c0-6.748 0.486-13.492 2.474-18.315 5.414-13.475 17.767-27.434 38.494-27.434 27.135,0 38.007,20.707 38.007,51.037v120.768h75.024Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002 0,21.658 16.264,39.002 41.455,39.002h0.484c26.165,0 42.452-17.344 42.452-39.002 -0.485-22.092 -16.241-38.954 -41.943-39.002Z" />
                    </svg>
                    <svg
                        height="100%"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2,
                            cursor : "pointer",
                            fill:"white"
                        }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554h-386.892c-34.524,0 -62.554,-28.03 -62.554,-62.554v-386.892c0,-34.524 28.029,-62.554 62.554,-62.554h386.892Zm-253.927,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196v0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z" />
                    </svg>
                    <svg
                        height="100%"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2,
                            cursor : "pointer",
                            fill:"white"
                        }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554h-386.892c-34.524,0 -62.554,-28.03 -62.554,-62.554v-386.892c0,-34.524 28.029,-62.554 62.554,-62.554h386.892Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z" />
                    </svg>

                    <svg
                        height="100%"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2,
                            cursor : "pointer",
                            fill:"white"
                        }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554h-386.892c-34.524,0 -62.554,-28.03 -62.554,-62.554v-386.892c0,-34.524 28.029,-62.554 62.554,-62.554h386.892Zm-58.673,127.703c-33.842,-33.881 -78.847,-52.548 -126.798,-52.568c-98.799,0 -179.21,80.405 -179.249,179.234c-0.013,31.593 8.241,62.428 23.927,89.612l-25.429,92.884l95.021,-24.925c26.181,14.28 55.659,21.807 85.658,21.816l0.074,0c98.789,0 179.206,-80.413 179.247,-179.243c0.018,-47.895 -18.61,-92.93 -52.451,-126.81Zm-126.797,275.782l-0.06,0c-26.734,-0.01 -52.954,-7.193 -75.828,-20.767l-5.441,-3.229l-56.386,14.792l15.05,-54.977l-3.542,-5.637c-14.913,-23.72 -22.791,-51.136 -22.779,-79.287c0.033,-82.142 66.867,-148.971 149.046,-148.971c39.793,0.014 77.199,15.531 105.329,43.692c28.128,28.16 43.609,65.592 43.594,105.4c-0.034,82.149 -66.866,148.983 -148.983,148.984Zm81.721,-111.581c-4.479,-2.242 -26.499,-13.075 -30.604,-14.571c-4.105,-1.495 -7.091,-2.241 -10.077,2.241c-2.986,4.483 -11.569,14.572 -14.182,17.562c-2.612,2.988 -5.225,3.364 -9.703,1.12c-4.479,-2.241 -18.91,-6.97 -36.017,-22.23c-13.314,-11.876 -22.304,-26.542 -24.916,-31.026c-2.612,-4.484 -0.279,-6.908 1.963,-9.14c2.016,-2.007 4.48,-5.232 6.719,-7.847c2.24,-2.615 2.986,-4.484 4.479,-7.472c1.493,-2.99 0.747,-5.604 -0.374,-7.846c-1.119,-2.241 -10.077,-24.288 -13.809,-33.256c-3.635,-8.733 -7.327,-7.55 -10.077,-7.688c-2.609,-0.13 -5.598,-0.158 -8.583,-0.158c-2.986,0 -7.839,1.121 -11.944,5.604c-4.105,4.484 -15.675,15.32 -15.675,37.364c0,22.046 16.048,43.342 18.287,46.332c2.24,2.99 31.582,48.227 76.511,67.627c10.685,4.615 19.028,7.371 25.533,9.434c10.728,3.41 20.492,2.929 28.209,1.775c8.605,-1.285 26.499,-10.833 30.231,-21.295c3.732,-10.464 3.732,-19.431 2.612,-21.298c-1.119,-1.869 -4.105,-2.99 -8.583,-5.232Z" />
                    </svg>

                    <svg
                        height="100%"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2,
                            cursor : "pointer",
                            fill:"white"
                        }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554h-386.892c-34.524,0 -62.554,-28.03 -62.554,-62.554v-386.892c0,-34.524 28.029,-62.554 62.554,-62.554h386.892Zm-20.967,175.63c-4.139,-15.489 -16.337,-27.687 -31.826,-31.826c-28.078,-7.524 -140.653,-7.524 -140.653,-7.524c0,0 -112.575,0 -140.653,7.524c-15.486,4.139 -27.686,16.337 -31.826,31.826c-7.521,28.075 -7.521,86.652 -7.521,86.652c0,0 0,58.576 7.521,86.648c4.14,15.489 16.34,27.69 31.826,31.829c28.078,7.521 140.653,7.521 140.653,7.521c0,0 112.575,0 140.653,-7.521c15.489,-4.139 27.687,-16.34 31.826,-31.829c7.521,-28.072 7.521,-86.648 7.521,-86.648c0,0 0,-58.577 -7.521,-86.652Zm-208.481,140.653v-108.002l93.53,54.001l-93.53,54.001Z" />
                    </svg>


                </div>
            </div>
            <div className="w-full md:w-6/12 text-white md:text-end my-4 lg:my-0">
                <p className="">© 2024 - Copyright and Designed by Md Shoaib Akhtar</p>
            </div>
        </div>
    )
}