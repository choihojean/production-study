import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/promote-page";
import SelectPair from "~/common/components/select-pair";
import { Form } from "react-router";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Label } from "~/common/components/ui/label";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "Promote Product | wemake" },
		{ name: "description", content: "Promote your product" },
	];
}


export default function PromotePage() {
	const [promotionPeriod, setPromotionPeriod] = useState<
	DateRange | undefined
	>()
	const totalDays = promotionPeriod?.from && promotionPeriod?.to ? 
		DateTime.fromJSDate(promotionPeriod.to).diff(DateTime.fromJSDate(promotionPeriod.from), "days").days : 0;
	return (
		<div>
			<Hero title="Promote Your Product" description="Boost your product's visibility" />
			<Form className="max-w-md mx-auto flex flex-col gap-10">
				<SelectPair
					label="Select a product"
					description="Select the product you want to promote"
					name="product"
					placeholder="Select a product"
					options={[
						{ label: "AI Dark Mode Maker", value: "product-1" },
						{ label: "AI Logo Generator", value: "product-2" },
						{ label: "AI Image Generator", value: "product-3" },
						{ label: "AI Video Generator", value: "product-4" },
						{ label: "AI Audio Generator", value: "product-5" },
						{ label: "AI Text Generator", value: "product-6" },
						{ label: "AI Code Generator", value: "product-7" },
						{ label: "AI Presentation Generator", value: "product-8" },
					]}
				/>
				<div className="flex flex-col gap-2 items-center text-center">
					<Label className="flex flex-col gap-1">Select a range of dates for promotion</Label>
					<small className="text-muted-foreground">
						Minimum duration is 3 days.
					</small>
					<Calendar 
						className="[--cell-size:--spacing(9.5)]" 
						mode="range" 
						selected={promotionPeriod} 
						onSelect={setPromotionPeriod} 
						min={3}
						disabled={{ before: new Date() }}
					/>
				</div>
				<Button disabled={totalDays === 0} type="submit" className="mx-auto w-2/3">
					Go to checkout (${totalDays * 20})
				</Button>
			</Form>

		</div>

	);
}

