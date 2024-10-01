import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Home = () => {


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            width: 350,
        },
        {
            field: 'body',
            headerName: 'Description',
            width: 350,
        },
    ]

    const [posts, setPosts] = useState([]);
    useEffect(() => {

        const getPostsData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postsData = await response.json();
            setPosts(postsData.slice(0, 20));
        }
        getPostsData();

    }, [])

    return (
        <div>
            <h1>This is Home Page</h1>
            {posts.length > 0 && (
                <div>
                    <h1>This is post Table</h1>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={posts}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            data-testid='poststable'
                        />
                    </Box>
                </div>

            )}
        </div>
    )

}


export default Home