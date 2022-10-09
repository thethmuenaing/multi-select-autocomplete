import React from "react";

const Dropdown = ({ addItem, filterItems, selectedItems }) => {
	return (
		<div
			id="dropdown"
			className="w-full z-40 mt-3 max-h-select overflow-y-auto "
		>
			<div className="flex flex-col w-full">
				{filterItems.map((item, key) => {
					return (
						<div
							key={key}
							className="cursor-pointer w-full"
							onClick={() => addItem(item)}
						>
							<div
								className={`flex ${
									selectedItems.findIndex((sItem) => sItem.id === item.id) >= 0
										? "bg-[#a0ccad] hover:bg-[#bbdbc5] cursor-not-allowed"
										: "bg-[#757575] hover:bg-[#3f3b3b]"
								} w-auto items-center px-3 py-2 mb-0.5 rounded-md text-white select-none`}
							>
								<div className="w-full items-center flex">
									<div className="mx-2 leading-6">{item.name}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dropdown;
