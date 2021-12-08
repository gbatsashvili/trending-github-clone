import { FlameIcon } from "assets/icons/FlameIcon";
import { HeartIcon } from "assets/icons/HeartIcon";
import { OrganizationIcon } from "assets/icons/OrganizationIcon";
import { TitleIcon } from "assets/icons/TitleIcon";

import {
  DevelopersItem,
  DevelopersItemLeft,
  DevelopersItemMiddle,
  DevelopersItemRight,
  DevLeftItemAvatar,
  DevLeftItemCounter,
  DevLeftItemName,
  DevMiddleItemDesc,
  DevMiddleItemPopular,
  DevMiddleItemRepoName,
  DevRightItemFollow,
  DevRightItemSponsor,
} from "../developers.styled";

export interface IDeveloerListItemTypes {
  avatar: string;
  name: string;
  username: string;
  developerUrl: string;
  rank: number;
  popularRepository: {
    description: string | null;
    repositoryName: string;
    url: string;
  };
}

export const DeveloperListItem = (
  props: IDeveloerListItemTypes
): JSX.Element => {
  const { rank, avatar, name, username, developerUrl, popularRepository } =
    props;
  return (
    <DevelopersItem>
      <DevelopersItemLeft>
        <DevLeftItemCounter>{rank}</DevLeftItemCounter>
        <DevLeftItemAvatar>
          <img src={avatar} alt="avatar" />
        </DevLeftItemAvatar>
        <DevLeftItemName>
          <div className="name">
            <a href={developerUrl} target="_blank" rel="noreferrer">
              {name}
            </a>
          </div>
          <div className="nickname">{username}</div>
        </DevLeftItemName>
      </DevelopersItemLeft>
      <DevelopersItemMiddle>
        {popularRepository.repositoryName ? (
          <>
            <DevMiddleItemPopular>
              <span>
                <FlameIcon />
              </span>
              popular repo
            </DevMiddleItemPopular>
            <DevMiddleItemRepoName>
              <span>
                <TitleIcon />
              </span>
              <a href={popularRepository.url} target="_blank" rel="noreferrer">
                {popularRepository.repositoryName}
              </a>
            </DevMiddleItemRepoName>
            <DevMiddleItemDesc>
              {popularRepository.description}
            </DevMiddleItemDesc>
          </>
        ) : (
          <DevMiddleItemRepoName>
            <span>
              <OrganizationIcon />
            </span>
            {`@${name}`}
          </DevMiddleItemRepoName>
        )}
      </DevelopersItemMiddle>
      <DevelopersItemRight>
        <DevRightItemSponsor>
          <span>
            <HeartIcon />
          </span>
          Sponsor
        </DevRightItemSponsor>
        <DevRightItemFollow>Follow</DevRightItemFollow>
      </DevelopersItemRight>
    </DevelopersItem>
  );
};
export default DeveloperListItem;
