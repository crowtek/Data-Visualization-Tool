import StatBox from './StatBox';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';

const IncomingCarsCount = ({vehicleData}) => {
    const damagedVehicles = vehicleData.filter((vehicle) => vehicle.damage)

    return (
        <div className="smallGrid">
            <StatBox
                title="Cargo with Damage"
                subtitle={{
                    name:"Cargos",
                    count:damagedVehicles.length,
                }}
                link="vehicleOverview"
                icon={<DepartureBoardIcon />}
                animationTime="100"
                boxClass="red"
            />
        </div>
    )
}

export default IncomingCarsCount;