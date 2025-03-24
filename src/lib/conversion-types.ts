import { 
  RectangleStackIcon,
  SquaresPlusIcon,
  CubeIcon,
  ScaleIcon,
  ClockIcon,
  BeakerIcon,
  ChartBarIcon,
  ViewfinderCircleIcon,
  ArrowDownCircleIcon,
  BoltIcon,
  Battery100Icon,
  ArrowRightIcon,
  TableCellsIcon,
  ArrowsUpDownIcon,
  ArrowPathIcon,
  ServerIcon,
  SignalIcon,
  CurrencyDollarIcon,
  Square3Stack3DIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'
import type { UnitType } from '@/lib/i18n/units'

export const conversionTypes: Array<{
  id: UnitType
  icon: React.ComponentType<{ className?: string }>
}> = [
  { id: 'length', icon: RectangleStackIcon },
  { id: 'area', icon: SquaresPlusIcon },
  { id: 'volume', icon: CubeIcon },
  { id: 'weight', icon: ScaleIcon },
  { id: 'time', icon: ClockIcon },
  { id: 'temperature', icon: BeakerIcon },
  { id: 'speed', icon: ChartBarIcon },
  { id: 'angle', icon: ViewfinderCircleIcon },
  { id: 'pressure', icon: ArrowDownCircleIcon },
  { id: 'power', icon: BoltIcon },
  { id: 'energy', icon: Battery100Icon },
  { id: 'force', icon: ArrowRightIcon },
  { id: 'density', icon: TableCellsIcon },
  { id: 'flow', icon: ArrowsUpDownIcon },
  { id: 'torque', icon: ArrowPathIcon },
  { id: 'data', icon: ServerIcon },
  { id: 'data_rate', icon: SignalIcon },
  { id: 'cooking', icon: Square3Stack3DIcon },
  { id: 'numeral', icon: CommandLineIcon }
] 