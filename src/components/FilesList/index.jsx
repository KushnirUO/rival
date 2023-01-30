import React, {useEffect, useState} from "react";
import {PaginationBlock} from "../PaginationBlock";
import {Box,} from "@mui/material";
import {Filters} from "../Filters";
import {get_cookie} from "../../utils/getCookie";
import UploadFile from "../UploadFile";
import Search from "../Search";

const FilesList = () => {
    const [cards, setCards] = useState([]);
    const [cardsAdd, setCardsAdd] = useState([]);
    const [filters, setFilters] = useState([]);
    let [search, setSearch] = useState();
    let formats = [".pdf", ".jpg", ".mp3", ".mp4"];

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list`)
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    useEffect(() => {
        function handleRandom() {
            let format = Math.floor(Math.random() * formats.length);
            return formats[format]
        }

        const array = cards.map((item) =>
            item.format = handleRandom(),
        )
        setFilters(cards);
        setCardsAdd(cards);
    }, [cards])

    useEffect(() => {
        setFilters(cardsAdd)
    }, [cardsAdd])

    function handleFilter() {
        setFilters(cardsAdd)
        let filterItem = get_cookie('filter')
        if (filterItem === '"1"') {
            setFilters(cardsAdd.filter((item) => (
                item.format === '.jpg'
                || item.format === '.svg'
                || item.format === '.gif'
                || item.format === '.jpeg'
                || item.format === '.png')))
        }
        if (filterItem === '"2"') {
            setFilters(cardsAdd.filter((item) =>
                item.format === '.pdf'
                || item.format === '.zip'
                || item.format === '.txt'
                || item.format === '.rar'
                || item.format === '.docx'))
        }
        if (filterItem === '"3"') {
            setFilters(cardsAdd.filter((item) =>
                item.format === '.mp3'
                || item.format === '.wav'
                || item.format === '.au'))
        }
        if (filterItem === '"4"') {
            setFilters(cardsAdd.filter((item) =>
                item.format === '.mp4'
                || item.format === '.avi'
                || item.format === '.mov'
                || item.format === '.mkv'
                || item.format === '.webm'))
        }
    }

    useEffect(() => {
        document.cookie = 'filter=' + JSON.stringify('');
        setFilters(cardsAdd.filter((item) => (item.author.toLowerCase().includes(search))))
    }, [search])

    return (
        <Box>
            <UploadFile state={cardsAdd} setState={setCardsAdd}/>
            <Box sx={{display: "flex", justifyContent: 'space-between', padding: '2.2rem 0 1.2rem'}}>
                <Search value={search} setValue={setSearch}/>
                <Filters onClick={() => {
                    handleFilter()
                }}/>
            </Box>
            <PaginationBlock cards={filters} link='fileView'/>
        </Box>
    );
}


export default FilesList;