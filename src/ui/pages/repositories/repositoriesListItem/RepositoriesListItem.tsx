import { ForkIcon } from "assets/icons/ForkIcon";
import { StarIcon } from "assets/icons/StarIcon";
import { TitleIcon } from "assets/icons/TitleIcon";
import {
  RepositoriesItem,
  RepositoriesItemMiddle,
  RepositoriesItemTop,
  RepoDesc,
  RepositoriesItemBottom,
  RepoStar,
  RepoTitle,
  RepoBottomLeft,
  RepoBottomRight,
  BuiltByUsers,
} from "../repositories.styled";
export interface IRepositoriesListItemTypes {
  username: string;
  repositoryName: string;
  description: string | null;
  forks: number;
  language: null | string;
  url: string;
  starsSince: number;
  totalStars: number | null;
  builtBy: Array<{
    avatar: string;
    url: string;
    username: string;
  }>;
}
const RepositoriesListItem = (
  props: IRepositoriesListItemTypes
): JSX.Element => {
  const {
    repositoryName,
    username,
    forks,
    description,
    url,
    language,
    starsSince,
    totalStars,
    builtBy,
  } = props;
  return (
    <RepositoriesItem>
      <RepositoriesItemTop>
        <RepoTitle>
          <span>
            <TitleIcon />
          </span>
          <a href={url} target="_blank" rel="noreferrer">
            {`${username} / ${repositoryName}`}
          </a>
        </RepoTitle>
        <RepoStar>
          <span>
            <StarIcon />
          </span>
          Star
        </RepoStar>
      </RepositoriesItemTop>
      <RepositoriesItemMiddle>
        <RepoDesc>{description}</RepoDesc>
      </RepositoriesItemMiddle>
      <RepositoriesItemBottom>
        <RepoBottomLeft>
          {language ? <div className="item">{language}</div> : null}
          <div className="item stars">
            <span>
              <StarIcon />
            </span>
            {totalStars}
          </div>
          <div className="item forks">
            <span>
              <ForkIcon />
            </span>
            {forks}
          </div>
          <div className="item">
            Built by
            <BuiltByUsers>
              {builtBy && builtBy.length > 0
                ? builtBy.map((item, index) => {
                    return (
                      <img
                        key={index + username}
                        src={item.avatar}
                        alt="avatar"
                      />
                    );
                  })
                : null}
            </BuiltByUsers>
          </div>
        </RepoBottomLeft>
        <RepoBottomRight>
          <span>
            <StarIcon />
          </span>
          {starsSince} stars today
        </RepoBottomRight>
      </RepositoriesItemBottom>
    </RepositoriesItem>
  );
};

export default RepositoriesListItem;
