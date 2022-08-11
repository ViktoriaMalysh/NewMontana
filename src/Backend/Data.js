import imgSlider1 from "../assets/slider-1.jpg";
import imgSlider2 from "../assets/slider-2.jpg";
import imgSlider3 from "../assets/slider-3.jpg";

export const termsOfService = [
	{
		id: 1,
		title: "Our Performance",
		text: "Sed ac sollicitudin ipsum. Vivamus vulputate, enim sit amet aliquet lacinia, ex mauris aliquam elit, vel pharetra augue arcu ultricies magna. Suspendisse justo erat, dignissim ut imperdiet ut, convallis vitae urna. Vivamus tincidunt lacinia metus sed suscipit. Phasellus luctus rhoncus mauris ut euismod. Aliquam elementum malesuada erat, vitae bibendum ex rutrum eget. Mauris sed nunc mauris. Curabitur semper sed justo a pellentesque. In hac habitasse platea dictumst. Mauris semper volutpat iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur consectetur dignissim nulla id ornare. Praesent placerat dolor vitae tellus lacinia, a malesuada est sodales. Praesent at consectetur sem, sed scelerisque arcu. Maecenas malesuada lorem id sagittis scelerisque. In hac habitasse platea dictumst.",
	},
	{
		id: 2,
		title: "Cookie",
		text: "Pellentesque sit amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel metus vehicula, consequat velit a, eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus eleifend porta fermentum. Pellentesque posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate ex posuere eget.",
	},
	{
		id: 3,
		title: "Payments",
		text: "Amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel metus vehicula, consequat velit a, eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus eleifend porta fermentum. Pellentesque posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate ex posuere eget.",
	},
	{
		id: 4,
		title: "Refund Policy",
		text: "Donec ut vestibulum sem, in faucibus mauris. Nulla et luctus nulla. Vestibulum consectetur nisi nec lobortis pretium. Fusce dignissim in sem in bibendum. Vivamus fermentum massa et egestas gravida. Suspendisse at vulputate ante, id tempus nunc. Curabitur sed dolor a elit ornare commodo. Curabitur blandit enim nulla, ornare suscipit risus pretium ut. Nullam rhoncus, sem eget dapibus elementum, purus dolor rutrum magna, nec laoreet odio sapien sit amet erat.Proin non ante purus. Donec ante enim, semper vel mauris at, rutrum blandit mauris. Vivamus at ante sit amet leo consequat viverra quis at odio. Proin arcu magna, placerat sed lorem id, rutrum convallis ante.Nam venenatis vestibulum mauris ut viverra. Ut porta consequat lorem a ullamcorper. In et arcu quam. Nunc tristique justo nec lectus ornare placerat. Nulla ut fringilla mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
	},
	{
		id: 5,
		title: "Hyperlinking to our Content",
		text: "Sed ac sollicitudin ipsum ivamus vulputate enim sit amet aliquet lacinia mauris aliquam elit:  1. Ut scelerisque hendrerit venenatis2. Proin fermentum lacus nec augue blandit placerat 3. Ut vestibulum elit justo suscipit sem ultricies 4. Integer fermentum vitae magna in condimentum 5. Aenean ultrices neque id pellentesque tincidunt 6. Donec ut vestibulum sem, in faucibus mauris.",
	},
	{
		id: 6,
		title: "Disclaimer",
		text: "Donec facilisis consequat nisi. Vivamus euismod at ipsum a gravida. Quisque vitae augue maximus elit iaculis tincidunt. Quisque dapibus dui non justo iaculis volutpat. Phasellus vulputate tempus lorem vitae vehicula. Maecenas interdum venenatis ante, scelerisque porta nibh mollis vitae. Curabitur in erat porttitor, imperdiet lectus non, porttitor odio. Donec efficitur efficitur dapibus. Aenean sit amet tortor id lorem ultricies rhoncus. Etiam ornare eros eu commodo vehicula. Curabitur vel enim eget velit tincidunt viverra eu in risus. Aliquam suscipit tellus eu fermentum facilisis. Pellentesque volutpat posuere ligula. Fusce et consequat mi.",
	},
];

export const itemsHeader = [
	{ id: "home", item: "Home", path: "/" },
	{ id: "rooms", item: "Rooms", path: "/rooms" },
	{ id: "about", item: "About", path: "/about" },
	{ id: "blog", item: "Blog", path: "/blog" },
	{ id: "contact", item: "Contact", path: "/contact" },
];

export const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 476 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 476, min: 0 },
		items: 1,
	},
};

export const images = [
	{ id: 1, src: imgSlider1 },
	{ id: 2, src: imgSlider2 },
	{ id: 3, src: imgSlider3 },
];

export const lang = [
	{ key: "eng", text: "eng" },
	{ key: "rus", text: "rus" },
	{ key: "ukr", text: "ukr" },
];

export const currency = [
	{ key: "usd", text: "usd" },
	{ key: "eur", text: "eur" },
	{ key: "uan", text: "uan" },
];

export const calendarItems = [
	{
		key: "check-in",
		label: "Check In",
		placeholder: "check-in",
	},
	{
		key: "check-out",
		label: "Check Out",
		placeholder: "check-out",
	},
];

export const homeBlok1Items = [
	{
		icon: "users",
		title: "5000+ Our Local Guides",
		text: "Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt ut labet aliqua at quis sit ipsum suspensse dolor.",
	},
	{
		icon: "check circle outline",
		title: "100% Trusted Agency",
		text: "Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt ut labet aliqua at quis sit ipsum suspensse dolor.",
	},
	{
		icon: "heart",
		title: "28+ Years of Experience",
		text: "Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt ut labet aliqua at quis sit ipsum suspensse dolor.",
	},
];

export const homeAbout = [
	{
		imgUrl: "https://live.themewild.com/travelox/assets/img/about/1.jpg",
		label: "ABOUT US",
		title: "WORLD BEST TRAVEL AGENCY COMPANY FOR YOU",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even.",
		items: [
			{
				text: "Take a look at our round up of the best shows",
			},
			{
				text: "It has survived not only five centuries",
			},
			{
				text: "Lorem Ipsum has been the ndustry standard dummy text",
			},
		],
		buttonName: "Discover More",
	},
];
