import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getALlServices from "@/libs/getALlServices";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const ServiceDetailsMain = ({ currentItemId }) => {
	const items = getALlServices();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { title, category, categoryId, img, img4, desc } = currentItem || {};

	const breadcrums = [
		{ name: "Services", path: "/services" },
	];

	if (category && categoryId) {
		breadcrums.push({ name: category, path: `/services/${categoryId}` });
	}

	return (
		<div>
			<FullScreenHero
				title={title ? title : "Service Details"}
				text={desc ? desc : (title ? title : "Service Details")}
				breadcrums={breadcrums}
				image={img4 || img}
			/>
			<ServicesDetailsPrimary
				option={{
					currentItem,
					items,
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
			/>
		</div>
	);
};

export default ServiceDetailsMain;
