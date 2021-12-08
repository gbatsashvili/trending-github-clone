import { LoadingIcon } from "assets/icons/LoadingIcon";
import { useQuery } from "react-query";
import { fetchDevelopers } from "services";
import { ErrorWrapper, LoadingWrapper } from "styled/layout.styled";
import Cardbox from "ui/components/cardbox/Cardbox";
import DeveloperListItem from "./developerListItem/DeveloperListItem";
import { DevelopersList } from "./developers.styled";

export interface ItemTypes {
  avatar: string;
  name: string;
  popularRepository: {
    repositoryName: string;
    description: string | null;
    url: string;
  };
  rank: number;
  since: string;
  url: string;
  username: string;
}

const Developers = (): JSX.Element => {
  const { isLoading, error, data } = useQuery("developers", fetchDevelopers);
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
      <DevelopersList>
        {data &&
          data.data.map((item: ItemTypes, index: number) => {
            return (
              <DeveloperListItem
                avatar={item.avatar}
                name={item.name}
                username={item.username}
                rank={item.rank}
                popularRepository={item.popularRepository}
                developerUrl={item.url}
                key={`${index} + ${item.name}`}
              />
            );
          })}
      </DevelopersList>
    </Cardbox>
  );
};

export default Developers;
