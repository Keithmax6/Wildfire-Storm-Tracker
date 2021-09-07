import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/storm-circle";

const LocationMarkerV2 = ({ onClick }) => {
  return (
    <div className="Location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarkerV2;
