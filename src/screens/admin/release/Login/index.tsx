import { FC, FormEventHandler, useState } from 'react';

import { Button } from '~/components/Button';

import { loginViaAdmin } from '~/commons/api/loginViaAdmin';

import { setAdminAuthorizationToken } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { setAccessToken } from '~/commons/storage/adminAccessToken';
import { Card } from '~/components/Card';
import { Password } from '~/components/Icons/Password';
import { User } from '~/components/Icons/User';
import { TextField } from '~/components/TextField';
import { toast } from '~/components/Toaster';
import { Typography } from '~/components/Typography';
import { ButtonContainer, Form, InputContainer, Page, TitleContainer } from './style';
import { Props } from './types';

export const Login: FC<Props> = ({ onSuccess }) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { token } = await loginViaAdmin(username, password);

      setAccessToken(token);
      setAdminAuthorizationToken();
      onSuccess(token);

      (e.target as HTMLFormElement).reset();
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Card style={{ maxWidth: 500, margin: 'auto', width: '100%' }}>
        <Form onSubmit={onSubmit}>
          <TitleContainer>
            <Typography variant="$headline4">Admin Login</Typography>
          </TitleContainer>
          <InputContainer>
            <TextField
              disabled={loading}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              label="Usuário*"
              icon={<User />}
              required
              type="text"
            />
          </InputContainer>
          <InputContainer>
            <TextField
              disabled={loading}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Senha*"
              icon={<Password />}
              required
              type="password"
            />
          </InputContainer>
          <ButtonContainer>
            <Button color="primary" disabled={loading} fullWidth showLoader={loading} type="submit">
              Login
            </Button>
          </ButtonContainer>
        </Form>
      </Card>
    </Page>
  );
};
