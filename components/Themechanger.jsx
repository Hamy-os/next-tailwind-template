const Themechanger = () => {
    return ( 
        <select data-choose-theme tabIndex="0" defaultValue="Choose A Color Theme" className=" select select-bordered w-full max-w-xs">
        <option disabled="disabled">Choose A Color Theme</option> 
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
        <option value="bumblebee">bumblebee</option>
        <option value="emerald">emerald</option>
        <option value="corporate">corporate</option>
        <option value="synthwave">synthwave</option>
        <option value="retro">retro</option>
        <option value="cyberpunk">cyberpunk</option>
        <option value="valentine">valentine</option>
        <option value="halloween">halloween</option>
        <option value="garden">garden</option>
        <option value="forest">forest</option>
        <option value="aqua">aqua</option>
        <option value="lofi">lofi</option>
        <option value="pastel">pastel</option>
        <option value="fantasy">fantasy</option>
        <option value="wireframe">wireframe</option>
        <option value="black">black</option>
        <option value="luxury">luxury</option>
        <option value="dracula">dracula</option>
        </select>
     );
}
 
export default Themechanger;