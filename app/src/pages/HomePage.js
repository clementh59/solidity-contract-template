import React, { useState } from "react";
import Column from "../components/Layout/Column";
import { withTheme } from "@emotion/react";
import { TextField } from "@mui/material";
import Header from "../components/Header";
import { sendTransaction, onEVMEventHook } from "./../services/web3.js";
import {useSnackbar} from 'notistack'
import { LoadingButton } from '@mui/lab';
import {notistackOptions} from "../utils/notistackUtils.js"

const HomePage = () => {

    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState(1);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const onButtonClick = async () => {
        await sendTransaction(address, amount);
        setLoading(true);
        onEVMEventHook(address, (amount) => {
            setLoading(false);
            enqueueSnackbar(`${amount} token minted`, notistackOptions.SUCCESS);
        });
    }

    return (
        <Column width='100vw'>
            <Header />
            <Column
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                width="100%"
                height="100%"
                minHeight="75vh"
                alignItems="center"
                justifyContent="center"
            >
                <TextField
                    id="input-address"
                    label="Address"
                    size="small"
                    value={address}
                    onChange={(v) => {setAddress(v.target.value)}}
                />
                <TextField
                    id="input-amount"
                    label="Amount"
                    type="number"
                    size="small"
                    value={amount}
                    onChange={(v) => {setAmount(v.target.value)}}
                />
                <LoadingButton variant="contained" onClick={onButtonClick} style={{marginTop: "8px"}} loading={loading}>
                    Send me CTKN
                </LoadingButton>
            </Column>
        </Column>
    );

}

export default withTheme(HomePage);