import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profisssionais da sua localidade'
        }
      />

      <UserInformation
        name={'Paula Martins'}
        picture={'https://github.com/PaulaMartinsGarcia.png'}
        rating={5}
        description={'São Paulo'}
      />
    </div>
  );
};

export default Home;
