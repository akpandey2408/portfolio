import { Badge } from "./badge"

export const TechTag = ({tag}) => {
    return (
        <Badge variant={"secondary"} className='gap-x-2 bg-white/20 glass' >
            <img src={tag.logo} height={15} width={15} alt='Technology Logo' /> 
            {tag.text}
        </Badge>
    )
}