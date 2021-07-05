import { getColor } from "../../styles/colors"

interface Props {
    color: string;
    width: number;
    handleClick?: ()=>void;
    className?: string;
}

export const HtmlIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width+'px'}
            viewBox="0 0 531.443 531.443"
            fill={getColor(color)}
        >
            <path d="M79.94 480.176l179.224 50.575c3.256.918 8.531.924 11.781.013l180.553-50.601c3.256-.912 6.132-4.382 6.438-7.748L499.441 6.096c.301-3.367-2.203-6.096-5.58-6.096H37.578c-3.378 0-5.875 2.729-5.575 6.096l41.506 466.319c.299 3.366 3.176 6.843 6.431 7.761zm44.817-382.348h281.918c3.378 0 5.869 2.729 5.563 6.096l-4.211 46.041c-.306 3.366-3.299 6.095-6.677 6.095H189.317c-3.378 0-5.894 2.729-5.612 6.102l3.978 48.036c.282 3.366 3.244 6.102 6.628 6.102H396.37c3.378 0 5.869 2.729 5.562 6.096l-15.521 168.826c-.312 3.366-3.2 6.824-6.463 7.724L272.286 428.64c-3.257.899-5.901 1.701-5.901 1.787s-.3.165-.667.165-3.305-.728-6.566-1.628l-108.661-30.019c-3.256-.899-6.114-4.363-6.383-7.729l-6.353-80.312c-.263-3.372 2.258-6.102 5.637-6.102h45.992c3.378 0 6.377 2.729 6.689 6.096l3.195 34.4c.312 3.366 3.213 6.812 6.475 7.692l53.403 14.443c3.262.881 8.556.888 11.818.006l53.733-14.455c3.262-.875 6.175-4.314 6.5-7.681l6.145-63.679c.324-3.366-2.154-6.089-5.533-6.089H140.4c-3.378 0-6.359-2.729-6.659-6.096L119.176 103.93c-.294-3.372 2.203-6.102 5.581-6.102z" />
        </svg>
    )
}

export const CssIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            width={width+'px'}
            fill={getColor(color)}
        >
            <path d="M32 0l40.8 460.8L256 512l183.136-51.168L480 0H32zm360.768 150.688l-5.152 57.888-15.52 173.568L256 414.208l-.064.032-116-32.128-8.128-90.752h56.832l4.224 47.104 63.072 17.024.064-.064 63.136-17.024 8.608-78.432-198.656.544-5.632-53.664 209.056-2.432 4.224-57.44-218.88.608-3.68-53.376h283.648l-5.056 56.48z" />
        </svg>
    )
}

export const JavascriptIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={width+'px'}
            fill={getColor(color)}
        >
            <path d="M43.336 4H6.668A2.669 2.669 0 004 6.668v36.664A2.669 2.669 0 006.668 46h36.664A2.668 2.668 0 0046 43.336V6.668A2.668 2.668 0 0043.336 4zM27 36.184C27 40.18 24.656 42 21.234 42c-3.093 0-5.324-2.074-6.234-4l3.145-1.902C18.75 37.172 19.672 38 21 38c1.27 0 2-.496 2-2.426V23h4zM35.676 42c-3.543 0-5.555-1.785-6.676-4l3-2c.816 1.336 1.707 2.613 3.59 2.613 1.582 0 2.41-.789 2.41-1.883 0-1.304-.86-1.77-2.598-2.53l-.953-.41c-2.754-1.173-4.586-2.642-4.586-5.75 0-2.86 2.184-5.04 5.59-5.04 2.426 0 4.168.844 5.426 3.055l-2.969 1.91c-.656-1.176-1.36-1.637-2.457-1.637-1.117 0-1.824.711-1.824 1.637 0 1.144.707 1.605 2.344 2.316l.953.41C40.172 32.078 42 33.496 42 36.684 42 40.117 39.3 42 35.676 42z" />
        </svg>
    )
}

export const SassIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={width+'px'}
            fill={getColor(color)}
        >
            <path d="M43.03 27.802a10.286 10.286 0 00-4.53 1.054c-.464-.926-.934-1.741-1.013-2.347-.092-.707-.199-1.129-.088-1.972.111-.843.599-2.036.591-2.125-.007-.089-.109-.518-1.117-.526-1.008-.007-1.87.194-1.972.46a9.797 9.797 0 00-.416 1.49c-.177.914-2.012 4.174-3.055 5.879-.341-.666-.631-1.252-.691-1.716-.092-.707-.199-1.129-.088-1.972.111-.843.599-2.036.591-2.125-.007-.089-.109-.518-1.117-.526-1.008-.007-1.87.194-1.972.46-.102.266-.21.888-.416 1.49-.207.602-2.647 6.039-3.286 7.448a43.557 43.557 0 01-.809 1.689l-.001-.002-.034.071c-.171.335-.273.521-.273.521l.003.007c-.136.246-.281.475-.353.475-.05 0-.151-.656.022-1.555.363-1.886 1.235-4.828 1.227-4.929-.004-.052.162-.564-.57-.833-.711-.26-.965.174-1.03.175-.063.001-.11.153-.11.153s.793-3.308-1.512-3.308c-1.44 0-3.436 1.576-4.42 3.004a1269.137 1269.137 0 00-4.974 2.727l-.108-.118c-2.794-2.981-7.958-5.089-7.739-9.096.08-1.457.586-5.293 9.924-9.946 7.649-3.812 13.773-2.763 14.831-.438 1.512 3.321-3.273 9.494-11.216 10.384-3.027.339-4.62-.834-5.017-1.271-.417-.46-.479-.481-.635-.394-.254.141-.093.547 0 .789.237.617 1.21 1.712 2.87 2.256 1.46.479 5.013.742 9.311-.92 4.813-1.862 8.571-7.041 7.468-11.37-1.123-4.403-8.423-5.85-15.332-3.396-4.112 1.461-8.563 3.754-11.764 6.747-3.806 3.56-4.412 6.658-4.162 7.952.889 4.6 7.228 7.595 9.767 9.815l-.35.193c-1.273.63-6.105 3.159-7.314 5.831-1.371 3.031.218 5.206 1.271 5.499 3.26.907 6.606-.725 8.404-3.407 1.798-2.681 1.578-6.172.753-7.766l-.032-.059.996-.587c.648-.38 1.284-.735 1.836-1.036-.309.846-.535 1.86-.653 3.325-.138 1.721.567 3.945 1.49 4.82.406.385.895.394 1.205.394 1.074 0 1.564-.893 2.103-1.95.662-1.296 1.249-2.804 1.249-2.804s-.737 4.075 1.271 4.075c.731 0 1.467-.949 1.795-1.432l.001.008.056-.095c.076-.116.119-.19.119-.19l.004-.021c.294-.51.946-1.674 1.924-3.594 1.263-2.48 2.475-5.586 2.475-5.586s.113.76.482 2.015c.217.739.679 1.556 1.043 2.339-.293.407-.473.64-.473.64l.005.012a23.86 23.86 0 01-.772.974c-.997 1.188-2.185 2.544-2.344 2.936-.187.461-.143.801.219 1.073.264.199.735.23 1.227.197.896-.06 1.527-.283 1.838-.418a6.156 6.156 0 001.58-.831c.978-.719 1.568-1.748 1.512-3.111-.031-.751-.271-1.495-.574-2.198.089-.128.178-.256.267-.387 1.542-2.255 2.738-4.732 2.738-4.732s.113.76.482 2.015c.187.636.556 1.329.887 2.009-1.45 1.178-2.349 2.547-2.662 3.445-.577 1.661-.125 2.414.723 2.585.384.078.927-.098 1.335-.271a6.172 6.172 0 001.688-.868c.978-.719 1.919-1.726 1.862-3.089-.026-.62-.194-1.236-.422-1.828 1.229-.512 2.821-.797 4.848-.56 4.349.508 5.202 3.223 5.039 4.359-.163 1.137-1.075 1.761-1.38 1.95-.305.189-.398.254-.372.394.037.204.178.196.438.152.358-.06 2.283-.924 2.366-3.022.104-2.658-2.448-5.583-6.968-5.559zm-33.518 11.3c-1.44 1.571-3.453 2.165-4.316 1.665-.932-.54-.563-2.854 1.205-4.521 1.077-1.016 2.468-1.952 3.391-2.529l.893-.537.097-.055-.001-.002.223-.134c.643 2.374.02 4.464-1.492 6.113zm10.493-7.134c-.502 1.223-1.552 4.352-2.191 4.184-.549-.144-.883-2.523-.11-4.863.389-1.178 1.22-2.586 1.709-3.133.786-.879 1.652-1.167 1.862-.81.269.454-.955 3.855-1.27 4.622zm8.67 4.137c-.213.111-.408.181-.498.127-.067-.04.088-.186.088-.186s1.084-1.167 1.512-1.698c.248-.309.537-.676.85-1.086.003.041.004.082.004.122-.004 1.398-1.354 2.341-1.956 2.721zm6.679-1.523c-.159-.113-.132-.478.389-1.614.205-.446.672-1.198 1.485-1.916.094.295.152.578.15.842-.011 1.759-1.266 2.416-2.024 2.688z" />
        </svg>
    )
}

export const ReactIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width={width+'px'}
            fill={getColor(color)}
        >
            <path d="M452.749 270.471c-4.604-5.969-9.6-11.94-14.939-17.888a305.547 305.547 0 0010.458-12.792c34.016-44.106 43.674-84.117 27.194-112.66-16.479-28.544-55.954-40.185-111.164-32.779a306.094 306.094 0 00-17.797 2.947 306.957 306.957 0 00-6.531-17.418C318.78 28.369 288.959 0 256 0s-62.78 28.369-83.969 79.881a306.957 306.957 0 00-6.531 17.418 307.09 307.09 0 00-17.797-2.947c-55.204-7.405-94.684 4.235-111.164 32.779s-6.822 68.554 27.194 112.66a303.967 303.967 0 0010.458 12.792c-5.34 5.948-10.335 11.918-14.939 17.888-34.016 44.106-43.674 84.117-27.194 112.66 13.241 22.934 41.321 34.955 80.484 34.955 9.579 0 19.829-.72 30.679-2.176 6.988-.938 14.15-2.174 21.446-3.679 2.295 6.884 4.748 13.529 7.364 19.889C193.22 483.631 223.041 512 256 512s62.78-28.369 83.969-79.881c2.616-6.36 5.069-13.005 7.364-19.889 7.296 1.505 14.458 2.742 21.446 3.679 10.853 1.456 21.097 2.176 30.679 2.176 39.159 0 67.245-12.022 80.484-34.955 16.481-28.543 6.823-68.553-27.193-112.659zm-57.603-148.345c27.422 0 46.804 6.961 54.335 20.004 9.854 17.068.753 45.986-24.969 79.339a273.373 273.373 0 01-7.72 9.537c-15.039-14.308-31.968-28.308-50.386-41.65-2.544-22.217-6.369-43.447-11.371-63.186 14.684-2.71 28.167-4.044 40.111-4.044zm-99.321 205.866c-13.485 7.785-26.794 14.769-39.816 20.979a572.13 572.13 0 01-39.834-20.979c-14.885-8.594-29.13-17.69-42.569-27.138A572.65 572.65 0 01171.868 256c0-17.398.763-34.099 2.167-50.002a570.846 570.846 0 0137.658-23.728c15.04-8.683 29.857-16.357 44.306-23.084 14.45 6.727 29.267 14.401 44.307 23.084a570.584 570.584 0 0137.658 23.728c1.404 15.903 2.167 32.604 2.167 50.002 0 15.531-.61 30.504-1.738 44.854-13.438 9.448-27.683 18.544-42.568 27.138zm37.992 12.012c-2.01 12.77-4.448 24.866-7.248 36.202-11.127-3.233-22.72-7.145-34.677-11.754a611.165 611.165 0 0018.933-10.479 607.935 607.935 0 0022.992-13.969zm-113.711 24.447c-11.959 4.61-23.549 8.518-34.677 11.751-2.799-11.334-5.237-23.429-7.247-36.198a606.614 606.614 0 0022.992 13.968 606.963 606.963 0 0018.932 10.479zm-77.872-87.507c-9.5-7.87-18.401-15.888-26.614-23.981 8.323-7.937 17.291-15.787 26.831-23.484a606.98 606.98 0 00-.583 26.521c0 7.029.127 14.013.366 20.944zm36.778-110.036c2.017-11.953 4.413-23.283 7.128-33.926 10.659 2.979 21.767 6.595 33.228 10.856a607.532 607.532 0 00-22.674 12.452 607.012 607.012 0 00-17.682 10.618zm113.619-23.071c11.461-4.261 22.569-7.878 33.229-10.856 2.715 10.644 5.111 21.974 7.128 33.927a608.296 608.296 0 00-17.681-10.618 606.983 606.983 0 00-22.676-12.453zm76.918 85.642c9.54 7.697 18.508 15.547 26.831 23.484-8.213 8.093-17.114 16.111-26.614 23.981a607.75 607.75 0 00.366-20.944c0-8.919-.2-17.766-.583-26.521zM256 30c21.699 0 44.749 27.603 61.225 74.297-19.851 5.579-40.429 12.976-61.225 22.018-20.796-9.042-41.374-16.438-61.225-22.018C211.251 57.603 234.301 30 256 30zM62.519 142.131c7.532-13.045 26.905-20.004 54.335-20.004 11.943 0 25.427 1.334 40.112 4.045-5.003 19.739-8.827 40.969-11.371 63.185-18.418 13.342-35.347 27.342-50.386 41.65a273.373 273.373 0 01-7.72-9.537c-25.723-33.353-34.824-62.271-24.97-79.339zm49.854 246.004c-27.422-.002-46.804-6.961-54.335-20.004-9.854-17.068-.753-45.986 24.969-79.339A281.373 281.373 0 0194.8 274.531c14.869 14.618 31.746 28.957 50.198 42.649 2.429 23.266 6.243 45.521 11.342 66.177-16.189 3.211-30.984 4.779-43.967 4.778zM256 482c-22.12 0-45.641-28.69-62.173-77.041 20.186-5.868 41.088-13.595 62.173-22.987 21.085 9.392 41.987 17.119 62.173 22.987C301.641 453.31 278.12 482 256 482zm197.962-113.869c-11.096 19.22-47.908 25.221-98.303 15.226 5.1-20.656 8.913-42.911 11.342-66.177 18.453-13.692 35.33-28.031 50.198-42.649a281.815 281.815 0 0111.793 14.261c25.724 33.353 34.825 62.271 24.97 79.339z" />
            <circle cx={256} cy={256} r={46.35} />
        </svg>
    )
}

export const IllustratorIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width+'px'}
            fill={getColor(color)}
        >
            <path d="M5 3c-1.102 0-2 .898-2 2v14c0 1.102.898 2 2 2h14c1.102 0 2-.898 2-2V5c0-1.102-.898-2-2-2zm10.5 4.5a.907.907 0 11-.001 1.814A.907.907 0 0115.5 7.5zm-5.813.406h1.626l2.687 8.5h-1.906l-.5-1.718H9.313l-.5 1.718H7zm5 2.188h1.72v6.312h-1.72zm-4.187.094l-.813 3h1.626z" />
        </svg>
    )
}

export const XdIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width+'px'}
            fill={getColor(color)}
        >
            <path d="M15.231 11.231c-.305 0-.527.123-.668.369s-.211.684-.211 1.313v.439c0 .625.066 1.062.199 1.31s.357.372.674.372c.328 0 .576-.146.744-.439V11.7c-.163-.312-.409-.469-.738-.469zM19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8.726 13.3l-1.172-2.982L7.937 16.3H5.938l2.051-4.301-2.01-4.23h1.975l1.148 2.93 1.148-2.93h1.975l-2.004 4.23 2.051 4.301h-1.998zm7.366 0h-1.506l-.076-.645c-.34.508-.777.762-1.313.762-.664 0-1.171-.254-1.521-.762s-.528-1.254-.536-2.238v-.48c0-1.039.176-1.814.527-2.326s.863-.768 1.535-.768c.488 0 .895.211 1.219.633V7.3h1.67v9z" />
        </svg>
    )
}

export const CloseIcon: React.FC<Props> = ({color, width, handleClick}) => {
    return (
        <svg
            onClick={handleClick}
            viewBox="0 0 32 32"
            width={width+"px"}
            xmlns="http://www.w3.org/2000/svg"
            style={{fill: getColor(color)}}
        >
            <path d="M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z" />
        </svg>
    )
}

export const MenuIcon: React.FC<Props> = ({color, width, handleClick, className}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.426 283.426"
            width={width+"px"}
            onClick={handleClick}
            style={{cursor: "pointer"}}
        >
            <g fill={getColor(color)}>
            <path d="M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z" />
            </g>
        </svg>
    )
}

export const GithubIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width+'px'}
            viewBox="0 0 24 24"
            fill={getColor(color)}
        >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    )
}

export const MailIcon: React.FC<Props> = ({color, width}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width+'px'}
            viewBox="0 0 24 24"
            fill={getColor(color)}
        >
            <path d="M12 12.713L.015 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5.562l-12 9.725z" />
        </svg>
    )
}