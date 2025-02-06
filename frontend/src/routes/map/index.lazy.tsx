import * as InteractiveMap from "@/features/map/components/InteractiveMap";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/map/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <InteractiveMap.InteractiveMap />;
}
