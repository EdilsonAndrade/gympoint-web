import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import { Form, Textarea } from '@rocketseat/unform';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import { Content, AnswerModal } from './styles';

export default function Order() {
  const [open, setOpen] = useState(false);

  const openQuestion = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Content>
      <div>
        <strong>Pedidos de auxilio</strong>
      </div>

      <Grid>
        <thead>
          <tr>
            <th>Aluno</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <button type="button" onClick={openQuestion}>
                Responder
              </button>
            </td>
          </tr>
        </tbody>
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <AnswerModal>
          <Form>
            <strong>PERGUNTA DO ALUNO</strong>
            <span>
              Olá pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar as
              marmitas e lotar a geladeira? Dou um pico de insulina e jogo o
              hipercalório?
            </span>
            <strong>SUA RESPOSTA</strong>
            <div>
              <Textarea
                style={{ borderStyle: 'none' }}
                placeholder="Insira a resposta com detalhamento"
                name="answer"
                cols={38}
                rows={10}
              />
            </div>
            <span>
              <Button buttonType="button" icon="none" saveButton>
                Responder aluno
              </Button>
            </span>
          </Form>
        </AnswerModal>
      </Dialog>
    </Content>
  );
}
