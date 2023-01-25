import { Component } from "react";
import {PaginationBlock} from "../PaginationBlock";
import {Box,} from "@mui/material";

class FilesList extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch(`https://picsum.photos/v2/list`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }


    render() {
        let formats = [".gif", ".img", ".jpg", ".png", ".mp3", ".mp4", ".au"];
        let format = Math.floor(Math.random() * formats.length);
        return (
            <Box>
                <PaginationBlock cards={this.state.data} link='fileView'/>
            </Box>
        );
    }
}

export default FilesList;