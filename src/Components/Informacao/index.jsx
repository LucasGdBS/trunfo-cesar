import { SpeedDial, SpeedDialAction } from "@mui/material";
import { InfoRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
import { grey } from '@mui/material/colors';

const actions = [
  {
    icon: <GitHub />,
    name: "GitHub",
    onClick: () => window.open("https://github.com/LucasGdBS", "_blank"),
  },
  {
    icon: <LinkedIn />,
    name: "Desenvolvido por LucasGdbs",
    onClick: () => window.open("https://www.linkedin.com/in/lucasgdbs/", "_blank"),
  },
];

function Informacao() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="absolute bottom-5 left-5 z-50">
      <SpeedDial
        ariaLabel="Mais informações"
        icon={<InfoRounded />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
				sx={{
          '& .MuiFab-primary': {
            bgcolor: grey[500], // Cor de fundo do botão principal
            '&:hover': {
              bgcolor: grey[700], // Cor de fundo do botão principal ao passar o mouse
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            tooltipPlacement="right"
            onClick={() => {
              action.onClick && action.onClick();
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default Informacao;
