import React, { useState } from "react";
import Dropdown from "./Dropdown";

const MultiSelect = () => {
	// managing dropdown items (list of dropdown items)
	const [items, setItems] = useState([
		{ id: 1, name: "john" },
		{ id: 2, name: "milos" },
		{ id: 3, name: "steph" },
		{ id: 4, name: "kathreine" },
		{ id: 5, name: "apple" },
		{ id: 6, name: "orange" },
		{ id: 7, name: "thet hmue name" },
		{ id: 8, name: "htet oo naing" },
		{ id: 9, name: "yangon" },
		{ id: 10, name: "mandalay" },
		{ id: 11, name: "myanmar" },
		{ id: 12, name: "what is your name?" },
		{ id: 13, name: "how old are you?" },
		{ id: 14, name: "where are you live?" },
	]);
	// state showing if dropdown is open or closed
	const [dropdown, setDropdown] = useState(false);
	const [filterItems, setFilterItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [value, setValue] = useState("");

	const toogleDropdown = () => {
		if (!value) {
			setFilterItems(items);
		}
		setDropdown(!dropdown);
		console.log("filterItems ", filterItems);
	};
	// adds new item to multiselect
	const addTag = (item) => {
		console.log("item ,", item);
		console.log("selected id ", selectedItems);
		if (selectedItems.findIndex((sItem) => sItem.id === item.id) >= 0) {
			return;
		} else {
			setSelectedItems([...selectedItems.concat(item)]);
		}
		setValue("");
	};
	// removes item from multiselect
	const removeTag = (item) => {
		const filtered = selectedItems.filter((e) => e !== item);
		setSelectedItems(filtered);
	};
	const handleOnChange = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);
		const filterItem = items.filter((item) => {
			return item?.name?.toLowerCase().includes(inputValue.toLowerCase());
		});
		setFilterItems(filterItem);
	};
	console.log("filter ", filterItems);
	return (
		<div className="w-full">
			<h1 className="text-center text-4xl font-bold text-gray-700 my-12">
				MultiSelect
			</h1>
			<div className="autocomplete-wrapper w-full">
				<div className="autocomplete">
					<div className="w-full flex flex-col items-center mx-auto">
						<div className="w-full">
							<div className="flex flex-col items-center">
								<div className="w-full ">
									<div className="my-2 p-1 flex border border-gray-200 bg-white rounded-md ">
										<div className="flex flex-auto flex-wrap">
											{selectedItems.map((tag, index) => {
												return (
													<div
														key={index}
														className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-700 bg-white border border-teal-300 "
													>
														<div className="text-xs font-normal leading-none max-w-full flex-initial">
															{tag.name}
														</div>
														<div className="flex flex-auto flex-row-reverse">
															<div onClick={() => removeTag(tag)}>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width="100%"
																	height="100%"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																	strokeWidth="2"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
																>
																	<line x1="18" y1="6" x2="6" y2="18"></line>
																	<line x1="6" y1="6" x2="18" y2="18"></line>
																</svg>
															</div>
														</div>
													</div>
												);
											})}
											<div className="flex-1">
												<input
													value={value}
													onChange={handleOnChange}
													className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
												/>
											</div>
										</div>
										<div
											className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
											onClick={toogleDropdown}
										>
											<button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="100%"
													height="100%"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-chevron-up w-4 h-4"
												>
													<polyline points="18 15 12 9 6 15"></polyline>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
							{dropdown || value ? (
								<Dropdown
									filterItems={filterItems}
									addItem={addTag}
									selectedItems={selectedItems}
								></Dropdown>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiSelect;
