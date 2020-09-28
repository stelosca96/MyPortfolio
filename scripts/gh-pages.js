const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/stefano-loscalzo',
    {
        branch: 'master',
        repo: 'https://github.com/stelosca96/MyPortfolio.git',
        user: {
            name: 'Stefano Loscalzo',
            email: 'stefano.loscalzo@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
