import React, { useState } from "react";
import Link  from "next/link";
import Themechanger from './Themechanger'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Themechanger />
		</div>
	);
}

export default Navbar;