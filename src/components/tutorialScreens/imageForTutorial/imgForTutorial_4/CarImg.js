import React from "react"
import Svg, {
    Path,
    Circle,
    Ellipse,
    Line,
    G,
    Defs,
    ClipPath,
    Rect,
    LinearGradient,
    Stop,
    Mask,
} from 'react-native-svg';

export const IconCarTutorial = () => {
    return (
        <Svg width="76" height="67" viewBox="0 0 76 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M58.7852 42.1709H55.3422C54.8857 42.1709 54.4478 42.3523 54.1249 42.6751C53.8021 42.998 53.6207 43.4358 53.6207 43.8924C53.6207 44.349 53.8021 44.7868 54.1249 45.1097C54.4478 45.4325 54.8857 45.6139 55.3422 45.6139H58.7852C59.2418 45.6139 59.6797 45.4325 60.0025 45.1097C60.3253 44.7868 60.5067 44.349 60.5067 43.8924C60.5067 43.4358 60.3253 42.998 60.0025 42.6751C59.6797 42.3523 59.2418 42.1709 58.7852 42.1709Z" fill="#0FB94D" />
            <Path d="M61.744 17.2621C61.6267 17.1476 61.4874 17.0567 61.3342 16.9948C61.1809 16.9328 61.0167 16.901 60.8508 16.9011H49.489C49.1541 16.9011 48.833 17.0312 48.5963 17.2626C48.3595 17.4941 48.2265 17.808 48.2265 18.1354V42.821H45.7017V39.1182C45.7017 38.7908 45.5687 38.4769 45.3319 38.2454C45.0952 38.0139 44.774 37.8839 44.4392 37.8839H43.1768V31.7125C43.1768 31.3851 43.0438 31.0712 42.807 30.8397C42.5703 30.6082 42.2492 30.4782 41.9144 30.4782H41.3052L20.2211 1.37695C20.1045 1.2158 19.9501 1.08434 19.7708 0.993605C19.5915 0.902867 19.3925 0.855497 19.1906 0.855469H10.3536C10.2043 0.858532 10.0568 0.887796 9.91806 0.941868C9.88019 0.955754 9.84389 0.971183 9.8076 0.988154C9.69889 1.03946 9.59842 1.10599 9.50935 1.18564C9.49041 1.20261 9.46832 1.21341 9.45096 1.23038C9.36372 1.3172 9.28983 1.41595 9.23161 1.52352C9.22214 1.54049 9.189 1.64695 9.17638 1.67781C9.13695 1.81272 9.10845 1.95046 9.09117 2.08975V15.6668H6.56631C6.37448 15.6669 6.18518 15.7096 6.01278 15.7919C5.84039 15.8742 5.68944 15.9937 5.5714 16.1416C5.45335 16.2894 5.37132 16.4616 5.33153 16.6451C5.29173 16.8286 5.29523 17.0185 5.34175 17.2004L6.60418 22.1376C6.67245 22.4046 6.83004 22.6416 7.05192 22.811C7.27379 22.9804 7.54722 23.0725 7.82874 23.0725H9.09117V25.5411C9.09117 25.8684 9.22417 26.1824 9.46092 26.4139C9.69768 26.6453 10.0188 26.7754 10.3536 26.7754C11.1027 26.7754 11.8349 26.9925 12.4577 27.3994C13.0805 27.8063 13.5659 28.3846 13.8526 29.0612C14.1393 29.7378 14.2143 30.4823 14.0681 31.2006C13.922 31.9189 13.5613 32.5787 13.0316 33.0965C12.502 33.6144 11.8271 33.967 11.0925 34.1099C10.3578 34.2528 9.5963 34.1794 8.90426 33.8992C8.21223 33.6189 7.62073 33.1443 7.20458 32.5354C6.78843 31.9265 6.56631 31.2106 6.56631 30.4782C6.56631 30.1509 6.4333 29.8369 6.19655 29.6054C5.9598 29.374 5.63869 29.2439 5.30387 29.2439C4.96906 29.2439 4.64795 29.374 4.4112 29.6054C4.17445 29.8369 4.04144 30.1509 4.04144 30.4782C4.04169 31.6459 4.38075 32.7895 5.01924 33.7763C5.65774 34.7631 6.56946 35.5525 7.64853 36.0529C8.7276 36.5533 9.92973 36.7442 11.1153 36.6032C12.3009 36.4623 13.4212 35.9955 14.3463 35.2569C15.2713 34.5183 15.963 33.5383 16.3411 32.4307C16.7192 31.3231 16.7681 30.1333 16.4822 28.9996C16.1963 27.8659 15.5873 26.8347 14.726 26.0259C13.8646 25.2171 12.7862 24.6638 11.616 24.4302V23.0725H12.8785C13.16 23.0725 13.4334 22.9804 13.6553 22.811C13.8772 22.6416 14.0347 22.4046 14.103 22.1376L15.3654 17.2004C15.412 17.0185 15.4155 16.8286 15.3757 16.6451C15.3359 16.4616 15.2538 16.2894 15.1358 16.1416C15.0178 15.9937 14.8668 15.8742 14.6944 15.7919C14.522 15.7096 14.3327 15.6669 14.1409 15.6668H11.616V5.96848L29.3737 30.4782H29.2901C28.9552 30.4782 28.6341 30.6082 28.3974 30.8397C28.1606 31.0712 28.0276 31.3851 28.0276 31.7125V37.8839H26.7652C26.4304 37.8839 26.1093 38.0139 25.8725 38.2454C25.6358 38.4769 25.5028 38.7908 25.5028 39.1182V42.821H1.51658C1.18176 42.821 0.86066 42.9511 0.623908 43.1825C0.387156 43.414 0.25415 43.7279 0.25415 44.0553L0.25415 53.9295C0.25415 54.2569 0.387156 54.5708 0.623908 54.8023C0.86066 55.0338 1.18176 55.1638 1.51658 55.1638H10.7323C10.2685 56.6712 10.2371 58.2741 10.6414 59.7977C11.0458 61.3213 11.8704 62.7071 13.0252 63.8038H1.51658C1.18176 63.8038 0.86066 63.9338 0.623908 64.1653C0.387156 64.3968 0.25415 64.7107 0.25415 65.0381C0.25415 65.3654 0.387156 65.6794 0.623908 65.9108C0.86066 66.1423 1.18176 66.2723 1.51658 66.2723H43.1768C43.5116 66.2723 43.8327 66.1423 44.0695 65.9108C44.3062 65.6794 44.4392 65.3654 44.4392 65.0381C44.4392 64.7107 44.3062 64.3968 44.0695 64.1653C43.8327 63.9338 43.5116 63.8038 43.1768 63.8038H25.3623C26.5172 62.7071 27.3418 61.3213 27.7461 59.7977C28.1504 58.2741 28.119 56.6712 27.6552 55.1638H52.3925C51.9288 56.6712 51.8973 58.2741 52.3017 59.7977C52.706 61.3213 53.5306 62.7071 54.6854 63.8038H48.2265C47.8917 63.8038 47.5706 63.9338 47.3339 64.1653C47.0971 64.3968 46.9641 64.7107 46.9641 65.0381C46.9641 65.3654 47.0971 65.6794 47.3339 65.9108C47.5706 66.1423 47.8917 66.2723 48.2265 66.2723H74.7376C75.0724 66.2723 75.3935 66.1423 75.6302 65.9108C75.867 65.6794 76 65.3654 76 65.0381C76 64.7107 75.867 64.3968 75.6302 64.1653C75.3935 63.9338 75.0724 63.8038 74.7376 63.8038H67.0225C68.1774 62.7071 69.002 61.3213 69.4063 59.7977C69.8106 58.2741 69.7792 56.6712 69.3154 55.1638H74.7376C75.0724 55.1638 75.3935 55.0338 75.6302 54.8023C75.867 54.5708 76 54.2569 76 53.9295V31.7125C76.0001 31.5504 75.9676 31.3898 75.9042 31.2399C75.8409 31.0901 75.7479 30.9539 75.6307 30.8392L61.744 17.2621ZM11.8922 20.604H8.81501L8.18379 18.1354H12.5234L11.8922 20.604ZM60.3285 19.3697L73.4751 32.2232V34.181H58.326V19.3697H60.3285ZM12.7948 3.32403H18.5373L38.2107 30.4782H32.4682L12.7948 3.32403ZM30.5525 32.9468H40.6519V37.8839H30.5525V32.9468ZM28.0276 40.3525H43.1768V42.821H28.0276V40.3525ZM19.1906 63.8038C17.9422 63.8038 16.7218 63.4418 15.6838 62.7637C14.6457 62.0856 13.8367 61.1218 13.3589 59.9941C12.8812 58.8664 12.7562 57.6255 12.9997 56.4284C13.2433 55.2313 13.8445 54.1316 14.7272 53.2685C15.61 52.4055 16.7347 51.8177 17.9592 51.5796C19.1836 51.3414 20.4528 51.4636 21.6062 51.9307C22.7596 52.3979 23.7454 53.1889 24.439 54.2037C25.1326 55.2186 25.5028 56.4118 25.5028 57.6324C25.5028 59.2691 24.8377 60.8389 23.654 61.9962C22.4702 63.1536 20.8647 63.8038 19.1906 63.8038ZM19.1906 48.9924C17.7678 48.9941 16.3665 49.3316 15.1057 49.9762C13.8449 50.6209 12.762 51.5537 11.949 52.6953H2.77901V50.2267H5.30387C5.63869 50.2267 5.9598 50.0967 6.19655 49.8652C6.4333 49.6337 6.56631 49.3198 6.56631 48.9924C6.56631 48.6651 6.4333 48.3511 6.19655 48.1196C5.9598 47.8882 5.63869 47.7581 5.30387 47.7581H2.77901V45.2896H48.2265V52.6953H26.4322C25.6192 51.5537 24.5363 50.6209 23.2755 49.9762C22.0147 49.3316 20.6134 48.9941 19.1906 48.9924ZM60.8508 63.8038C59.6024 63.8038 58.382 63.4418 57.344 62.7637C56.306 62.0856 55.4969 61.1218 55.0192 59.9941C54.5414 58.8664 54.4164 57.6255 54.66 56.4284C54.9035 55.2313 55.5047 54.1316 56.3875 53.2685C57.2702 52.4055 58.395 51.8177 59.6194 51.5796C60.8438 51.3414 62.113 51.4636 63.2664 51.9307C64.4198 52.3979 65.4056 53.1889 66.0992 54.2037C66.7928 55.2186 67.163 56.4118 67.163 57.6324C67.163 59.2691 66.498 60.8389 65.3142 61.9962C64.1304 63.1536 62.5249 63.8038 60.8508 63.8038ZM68.0925 52.6953C67.2807 51.5524 66.1981 50.6187 64.937 49.9738C63.6759 49.3289 62.274 48.9921 60.8508 48.9921C59.4277 48.9921 58.0257 49.3289 56.7647 49.9738C55.5036 50.6187 54.421 51.5524 53.6092 52.6953H50.7514V19.3697H55.8011V35.4153C55.8011 35.7427 55.9341 36.0566 56.1709 36.2881C56.4076 36.5196 56.7287 36.6496 57.0635 36.6496H73.4751V40.3525H69.6879C68.6834 40.3525 67.7201 40.7426 67.0098 41.437C66.2996 42.1314 65.9006 43.0732 65.9006 44.0553C65.9006 45.0373 66.2996 45.9792 67.0098 46.6736C67.7201 47.368 68.6834 47.7581 69.6879 47.7581H73.4751V52.6953H68.0925ZM73.4751 45.2896H69.6879C69.353 45.2896 69.0319 45.1595 68.7952 44.9281C68.5584 44.6966 68.4254 44.3826 68.4254 44.0553C68.4254 43.7279 68.5584 43.414 68.7952 43.1825C69.0319 42.9511 69.353 42.821 69.6879 42.821H73.4751V45.2896Z" fill="#252525" />
            <Circle cx="19.1907" cy="57.6637" r="3.44299" fill="#0FB94D" />
            <Path d="M64.3299 57.777C64.3299 59.6785 62.7884 61.22 60.8869 61.22C58.9854 61.22 57.4439 59.6785 57.4439 57.777C57.4439 55.8755 58.9854 54.334 60.8869 54.334C62.7884 54.334 64.3299 55.8755 64.3299 57.777Z" fill="#0FB94D" />
        </Svg>


    )
}


