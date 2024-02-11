import StatBox from './StatBox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const UserOnline = ({userData}) => {
    return (
        <div className="smallGrid">
            <StatBox
                title="User Online"
                subtitle={{
                    name:"User",
                    count:userData?.filter((user)=> user.status === "online").length,
                }}
                link = "calendar"
                icon={<PersonOutlineOutlinedIcon/>}
                boxClass="green"
            />
        </div>
    )
}

export default UserOnline;