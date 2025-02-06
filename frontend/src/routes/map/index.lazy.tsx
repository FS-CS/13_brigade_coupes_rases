import { createLazyFileRoute } from '@tanstack/react-router'
import { InteractiveMap } from '../../features/map/components/InteractiveMap'

export const Route = createLazyFileRoute('/map/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <InteractiveMap />
}
