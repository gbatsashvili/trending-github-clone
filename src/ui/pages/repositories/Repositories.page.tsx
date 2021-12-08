import { LoadingIcon } from "assets/icons/LoadingIcon";
import { useQuery } from "react-query";
import { fetchRepositories } from "services";
import { ErrorWrapper, LoadingWrapper } from "styled/layout.styled";
import Cardbox from "ui/components/cardbox/Cardbox";
import { RepositoriesList } from "./repositories.styled";
import RepositoriesListItem from "./repositoriesListItem/RepositoriesListItem";

export interface IReposTypes {
  builtBy: Array<{
    avatar: string;
    url: string;
    username: string;
  }>;
  description: string;
  forks: number;
  language: null | string;
  languageColor: null | string;
  rank: number;
  repositoryName: string;
  since: string;
  starsSince: number;
  totalStars: number | null;
  url: string;
  username: string;
}

const Repositories = (): JSX.Element => {
  const { isLoading, error, data } = useQuery("developers", fetchRepositories);

  if (isLoading) {
    return (
      <Cardbox>
        <LoadingWrapper>
          <LoadingIcon />
        </LoadingWrapper>
      </Cardbox>
    );
  }
  if (error) {
    return (
      <Cardbox>
        <ErrorWrapper>
          <div>Something went wrong...</div>
        </ErrorWrapper>
      </Cardbox>
    );
  }
  return (
    <Cardbox>
      <RepositoriesList>
        {data &&
          data.data.map((item: IReposTypes, index: number) => {
            return (
              <RepositoriesListItem
                builtBy={item.builtBy}
                key={`${item.username} + ${index}`}
                url={item.url}
                language={item.language}
                starsSince={item.starsSince}
                totalStars={item.totalStars}
                description={item.description}
                forks={item.forks}
                repositoryName={item.repositoryName}
                username={item.username}
              />
            );
          })}
      </RepositoriesList>
    </Cardbox>
  );
};

export default Repositories;
