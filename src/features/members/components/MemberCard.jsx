import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, cn } from "@/utils/utils";

const MemberCard = ({ member }) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-4 p-5">
                {/* Member avatar and online status */}
                <div className="relative">
                    <Avatar className="size-14 rounded-xl">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="rounded-xl">
                            {getInitials(member.name)}
                        </AvatarFallback>
                    </Avatar>

                    {/* Indicate whether the member is currently online */}
                    <span
                        className={cn(
                            "absolute -bottom-0.5 -inset-s-0.5 size-3 rounded-full",
                            member.online
                                ? "bg-success"
                                : "bg-muted-foreground",
                        )}
                    />
                </div>

                {/* Member information */}
                <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{member.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                        {member.role}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

MemberCard.propTypes = {
    /** Member data displayed in the card. */
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        online: PropTypes.bool.isRequired,
    }).isRequired,
};

export default MemberCard;
