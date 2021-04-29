import {Card} from '../../../shared/interfaces';
import * as variables from '../../../assets/styles/variables';

export const cardsData: Card[] = [
    {
        buttonName: 'Box name 1',
        cardTitle: 'Text from box name 1',
        cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ultricies dui. Donec ante enim, elementum at turpis in, congue fermentum metus. Duis ac semper libero. Phasellus fermentum blandit neque ac varius. Phasellus lobortis nibh quis ultricies ultricies. Cras ut massa turpis. Aenean et consequat arcu. Duis tincidunt lectus eget molestie commodo. Suspendisse metus nunc, auctor sit amet ex a, faucibus tempor ipsum. In at nulla vitae purus luctus luctus. Suspendisse eleifend, ',
        style: {
            background: variables.colorLight,
            color: variables.secondaryBlue
        }
    },
    {
        buttonName: 'Box name 2',
        cardTitle: 'Text from box name 2',
        cardContent: 'Donec ullamcorper elementum lacus, et eleifend orci. Vivamus accumsan urna nec suscipit malesuada. Quisque iaculis urna vitae lacus sollicitudin, ac molestie sem rhoncus. Vestibulum dictum velit magna, vel tempor nibh feugiat ac. Morbi laoreet luctus metus, in ultrices leo commodo nec. Sed dictum urna ut dictum accumsan. Etiam maximus felis ut massa elementum pretium. Nulla facilisi. Sed rhoncus nec orci a interdum. Nulla tellus enim, eleifend eu nisl ac, semper dapibus dolor.',
        style: {
            background: variables.primaryYellow,
            color: variables.colorLight
        }
    },
    {
        buttonName: 'Box name 3',
        cardTitle: 'Text from box name 3',
        cardContent: 'Vivamus fermentum sapien sit amet nisl cursus, nec commodo enim bibendum. Vestibulum commodo odio diam, a laoreet elit laoreet sed. Duis et luctus dui, non auctor arcu. Etiam purus felis, porta a purus non, scelerisque dignissim nulla. Mauris sodales id massa non tristique. Ut ligula purus, cursus sollicitudin sodales eget, rhoncus sit amet massa. Curabitur vel turpis quis neque condimentum fermentum. Duis sit amet semper elit. Sed ullamcorper auctor purus, ac consequat est molestie vitae. ',
        style: {
            background: variables.secondaryYellow,
            color: variables.colorLight
        }
    },
    {
        buttonName: 'Box name 4',
        cardTitle: 'Text from box name 4',
        cardContent: 'Nunc id nibh quis lacus bibendum vestibulum. Curabitur accumsan metus justo, commodo dapibus nulla lacinia vitae. Quisque eget libero quam. Aliquam blandit consectetur quam, non iaculis turpis tincidunt egestas. Donec auctor facilisis neque, a efficitur enim feugiat vitae. Duis molestie urna ligula. Morbi eu mattis metus.\n' + 'Phasellus venenatis nec metus in fringilla. Fusce facilisis in felis sit amet tincidunt. Nulla facilisi. Nullam commodo hendrerit odio, ut luctus urna venenatis vel. Nulla id quam eu lorem rutrum sollicitudin vel vel dolor',
        style: {
            background: variables.secondaryBlue,
            color: variables.colorLight
        }
    }
]