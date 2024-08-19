// We are gonna use Daisy UI card ----- https://daisyui.com/components/card/
import { UUID } from "crypto";

type cardProps = {
	UUID: UUID;
};

const ProjectCard = ({ UUID }: cardProps) => {
	// Add a Fetch for Cloudflare R2 and Postgre

	return (
		// Add the glass property as seen on the glass card here https://daisyui.com/components/card/#card-glass
		<div className="card bg-base-100 w-96 shadow-xl">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					Shoes!
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
