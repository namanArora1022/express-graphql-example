import { Box, Spinner, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useUsersQuery } from '../generated/graphql';

const Home: NextPage = () => {
    const { data, loading, error } = useUsersQuery();

    if (loading) {
        return <Spinner />;
    }

    if (error || !data) {
        return <Text color="red">Something went wrong 😭</Text>;
    }

    return (
        <>
            <Head>
                <title>GraphQL</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <Text>List of Users</Text>
            {data.users.map((user, index) => (
                <Box key={user.id}>
                    {index + 1}
                    {'.) '}
                    {user.email}
                </Box>
            ))}
        </>
    );
};

export default Home;
