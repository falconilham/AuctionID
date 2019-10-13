export const listing = [
	{
		name: "category",
		label: "Category listing",
		data: [ "Sport", "Electonic", "Fashion", "Games" ]
	},
	{
		name: "region",
		label: "Region listing",
		data: ["Asia", "Europe", "Africa", "South America", "North America"]
	},
	{
		name: "type",
		label: "Type listing",
		data: ["Auction", "Fixed Price"]
	}
]

export const additional =[
	{
		name: "price",
		label: "Starting Price",
		type: "number"
	},
	{
		name: "image",
		label: "Image",
		type: "file"
	},
	{
		name: "shipping",
		label: "Shipping",
		data: ["FeDex", "Ninja Express", "SiCepat"],
		type: "options"
	}
]
