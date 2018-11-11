function mapChooser(location){
    if(!location){
        return "default.png";
    }
    return `${location}.png`;
}

export default mapChooser;