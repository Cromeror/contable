
import React from "react"
import { Grid, Modal as MuiModal, Card, CardContent, Typography, IconButton, CardActions, Button, CardHeader, SxProps, Theme } from "@mui/material"
import classNames from "classnames"
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    open: boolean
    onClose: () => void,
    children: any
    title?: string,
    sx?: SxProps<Theme>
}

const ModalContent = ({ children }: any) => {
    return <div>
        {children}
    </div>
}

export const Modal = ({ open, onClose, title, children, sx }: Props) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
        >
            <Card
                className={classNames("absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%]"
                )}
                sx={{
                    overflow: "auto",
                    maxWidth: "80vw",
                    minWidth: "30%",
                    maxHeight: "90vh",
                    minHeight: "50px",
                    ...sx
                }}
            >
                <CardContent>
                    <ModalContent>
                        <Grid container spacing={2} className="position-relative">
                            <Grid item xs={12} className="position-absolute top-0">
                                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                                    <Grid item>
                                        <Typography variant="subtitle2" component="h2" className="text-gray-600">
                                            {title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={onClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {children}
                            </Grid>
                        </Grid>
                    </ModalContent>
                </CardContent>
                {/* <CardActions>
                    <Button>
                        Cancelar
                    </Button>
                    <Button>
                        Guardar
                    </Button>
                </CardActions> */}
            </Card>
        </MuiModal>
    )
}