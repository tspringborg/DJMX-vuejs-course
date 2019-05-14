/* eslint-disable */
import _ from 'lodash'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const lines = [
    "The sky is no longer the limit.","Man is an artifact designed for space travel. He is not designed to remain in his present biologic state any more than a tadpole is designed to remain a tadpole.","The moon and other celestial bodies should be free for exploration and use by all countries. No country should be permitted to advance a claim of sovereignty.","The question is not so much whether there is life on Mars as whether it will continue to be possible to live on Earth.","No matter how vast, how total, the failure of man here on earth, the work of man will be resumed elsewhere. War leaders talk of resuming operations on this front and that, but man's front embraces the whole universe.","Until they come to see us from their planet, I wait patiently. I hear them saying: Don't call us, we'll call you.","The eternal silence of these infinite spaces fills me with dread.","Space is the stature of God.","The universe, as far as we can observe it, is a wonderful and immense engine.","Our passionate preoccupation with the sky, the stars, and a God somewhere in outer space is a homing impulse. We are drawn back to where we came from.","Prometheus is reaching out for the stars with an empty grin on his face.","It's only during an eclipse that the Man in the Moon has a place in the sun.","It is marvelous indeed to watch on television the rings of Saturn close; and to speculate on what we may yet find at galaxy's edge. But in the process, we have lost the human element; not to mention the high hope of those quaint days when flight would create one world. Instead of one world, we have star wars, and a future in which dumb dented human toys will drift mindlessly about the cosmos long after our small planet's dead.","Space is almost infinite. As a matter of fact, we think it is infinite.","It was a thunderingly beautiful experience -- voluptuous, sexual, dangerous, and expensive as hell.",
    "If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.",
    "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",
    "That's one small step for [a] man, one giant leap for mankind.",
    "We have an infinite amount to learn both from nature and from each other",
    "I don't know what you could say about a day in which you have seen four beautiful sunsets.",
    "It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.",
    "Houston, Tranquillity Base here. The Eagle has landed.",
    "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine",
    "Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.",
    "Problems look mighty small from 150 miles up.",
    "Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind.",
    "You know, being a test pilot isn't always the healthiest business in the world.",
    "For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.",
    "The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.",
    "A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.",
    "Across the sea of space, the stars are other suns.",
    "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.",
    "Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.",
    "The sky is the limit only for those who aren't afraid to fly!",
    "We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.",
    "Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.",
    "Where ignorance lurks, so too do the frontiers of discovery and imagination.",
    "Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.",
    "To go places and do things that have never been done before – that’s what living is all about.",
    "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.",
    "To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?",
    "The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.",
    "Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.",
    "Buy why, some say, the moon? Why choose this as our goal? And they may as well ask why climb the highest mountain?",
    "The dreams of yesterday are the hopes of today and the reality of tomorrow.",
    "As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.",
    "Failure is not an option.",
    "NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go.",
    "There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.",
    "When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!",
    "Astronomy compels the soul to look upward, and leads us from this world to another.",
    "The regret on our side is, they used to say years ago, we are reading about you in science class. Now they say, we are reading about you in history class.",
    "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.",
    "What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.",
    "We want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore … We believe in what we’re doing. Now it’s time to go.",
    "As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",
]

const words = _.sortBy([
    'biogenic',
    'genetics',
    'geology',
    'geophysics',
    'glassware',
    'graduatedcylinder',
    'gravity',
    'magnetism',
    'mass',
    'matter',
    'measure',
    'meteorologist',
    'meteorology',
    'microbiologist',
    'microbiology',
    'microscope',
    'mineral',
    'mineralogy',
    'molecule',
    'motion',
    'quantum',
    'radiology',
    'research',
    'retort',
    'scale',
    'science',
    'scientist',
    'seismology',
    'telescope',
    'temperature',
    'theory',
    'thermometer',
    'tissue',
    'variable',
    'virologist',
    'volcanology',
    'volume',
    'volumetric',
    'weather',
    'weigh',
    'zoology',
], 'length')
const names = ["Aage Bohr","Abdul Qadeer Khan","Abu Nasr Al-Farabi","Ada Lovelace","Adalbert Czerny","Agnes Arber","Ahmed Zewail","Al-Battani","Alan Turing","Albert Abraham Michelson","Albert Einstein","Alberto Santos-Dumont","Albrecht von Haller","Aldo Leopold","Alessandro Volta","Alexander Bain","Alexander Brongniart","Alexander Fleming","Alexander Graham Bell","Alexander Von Humboldt","Alfred Binet","Alfred Blalock","Alfred Kinsey","Alfred Nobel","Alfred Wegener","Alfred Russel Wallace","Amedeo Avogadro","Anaximander","Anders Celsius","Andre Marie Ampère","Andreas Vesalius","Angel Alcala","Antoine Lavoisier","Antonie van Leeuwenhoek","Antonio Meucci","Antony Hewish","Archimedes","Aristarchus","Aristotle","Arnold Orville Beckman","Arnold Sommerfeld","Arthur Compton","Arthur Eddington","Artturi Virtanen","Avicenna","B. F. Skinner","Barbara McClintock","Beatrix Potter","Benjamin Cabrera","Benjamin Franklin","Benjamin Thompson","Bernardo Houssay","Bernhard Riemann","Bill Nye","Blaise Pascal","Brahmagupta","Brian Cox","C. V. Raman","Carl Bosch","Carl Friedrich Gauss","Carl Sagan","Carolus Linnaeus","Charles-Augustin de Coulomb","Charles Babbage","Charles Darwin","Charles Lyell","Charles Sherrington","Charles Townes","Chen-Ning Yang","Christiaan Huygens","Christiane Nusslein-Volhard","Clarence Birdseye","Claude Bernard","Claude Levi-Strauss","Claudius Ptolemy","Clyde Tombaugh","Daniel Bernoulli","David Bohm","David Hilbert","Dian Fossey","Dmitri Mendeleev","Dorothy Hodgkin","E. O. Wilson","Edmund Halley","Eduard Buchner","Edward Jenner","Edward Teller","Edwin Herbert Land","Edwin Hubble","Elizabeth Blackwell","Emil Adolf Behring","Emil Fischer","Emil Kraepelin","Emile Berliner","Emmy Noether","Empedocles","Enrico Fermi","Eratosthenes","Ernest Lawrence","Ernest Rutherford","Ernesto Illy","Ernst Haeckel","Ernst Ising","Ernst Mach","Ernst Mayr","Ernst Werner von Siemens","Erwin Chargaff","Erwin Schrödinger","Euclid","Evangelista Torricelli","Fibonacci – Leonardo of Pisa","Florence Nightingale","Frances Kelsey","Francesco Redi","Francis Bacon","Francis Crick","Francis Galton","Frank Drake","Frank Hornby","Franz Boas","Franz Mesmer","Fred Hoyle","Frederick Gowland Hopkins","Frederick Sanger","Frederick Soddy","Friedrich August Kekulé","Friedrich Wöhler","Fritz Haber","Galen","Galileo Galilei","Gene Shoemaker","Georg Brandt","Georg Ohm","George Beadle","George Gamow","George Gaylord Simpson","George Wald","George Washington Carver","Georges Cuvier","Georges Lemaître","Georges-Louis Leclerc, Comte de Buffon","Gertrude Elion","Gerty Theresa Cori","Glenn Seaborg","Gottfried Leibniz","Gottlieb Daimler","Grace Murray Hopper","Gregor Mendel","Guglielmo Marconi","Gustav Kirchoff","Gustav Ludwig Hertz","Hans Bethe","Hans Christian Oersted","Hans Selye","Harold Urey","Harriet Quimby","Hedy Lamarr","Heike Kamerlingh Onnes","Heinrich Hertz","Hendrik Antoon Lorentz","Henri Becquerel","Henrietta Swan Leavitt","Henry Bessemer","Henry Cavendish","Henry David Thoreau","Henry Ford","Henry Moseley","Hermann Rorschach","Hermann von Helmholtz","Hipparchus","Homi Jehangir Bhabha","Humphry Davy","Ibn Battuta","Ibn Rushd","Inge Lehmann","Irene Joliot-Curie","Isaac Newton","Ivan Pavlov","J. Hans D. Jensen","J. J. Thomson","J. Robert Oppenheimer","Jack Horner","Jacob Berzelius","Jacques Cousteau","Jagadish Chandra Bose","James Chadwick","James Clerk Maxwell","James Dwight Dana","James Hutton","James Prescott Joule","James Watson","James Watt","Jan Baptist von Helmont","Jane Goodall","Jane Marcet","Jean Andre Deluc","Jean Piaget","Jean-Baptiste Lamarck","Jim Al-Khalili","Jocelyn Bell Burnell","Johannes Kepler","John Archibald Wheeler","John Bardeen","John Dalton","John Locke","John Logie Baird","John Napier","John Needham","John Ray","John von Neumann","Jonas Salk","Joseph Banks","Joseph Henry","Joseph Lister","Joseph Priestley","Justus von Liebig","K. Eric Drexler","Karl F. Herzfeld","Karl Landsteiner","Karl Popper","Katharine Burr Blodgett","Keisuke Ito","Kip S. Thorne","Konrad Lorenz","Kristian Birkeland","Lawrence Bragg","Lee De Forest","Leland Clark","Leo Szilard","Leon Foucault","Leonardo da Vinci","Leonhard Euler","Lester R. Brown","Linus Pauling","Lise Meitner","Louis Agassiz","Louis de Broglie","Louis Pasteur","Ludwig Boltzmann","Lucretius","Luigi Galvani","Luis Alvarez","Luther Burbank","Lynn Margulis","Mae Carol Jemison","Marcello Malpighi","Marguerite Perey","Maria Gaetana Agnesi","Maria Goeppert-Mayer","Maria Mitchell","Marie Curie","Mario Molina","Mary Anning","Maurice Hilleman","Maurice Wilkins","Max Born","Max Delbruck","Max Planck","Max von Laue","Michael E. Brown","Michael Faraday","Michio Kaku","Mihailo Petrovic Alas","Mohammad Abdus Salam","Muhammad ibn Musa al-Khwarizmi","Murray Gell-Mann","Neil deGrasse Tyson","Nettie Stevens","Niccolo Leoniceno","Niccolo Tartaglia","Nicholas Culpeper","Nicolaus Copernicus","Niels Bohr","Nikola Tesla","Noam Chomsky","Omar Khayyam","Oswald Avery","Otto Hahn","Otto Haxel","Paul Dirac","Paul Ehrlich","Pearl Kendrick","Percy Lavon Julian","Peter Debye","Philippe Pinel","Pierre Curie","Pierre de Fermat","Pierre-Simon Laplace","Pliny the Elder","Prafulla Chandra Ray","Prokop Divis","Pythagoras","Rachel Carson","Ramon Barba","Randy Pausch","René Descartes","Richard Feynman","Rita Levi-Montalcini","Robert Bosch","Robert Boyle","Robert Brown","Robert Bunsen","Robert Goddard","Robert Hooke","Robert Koch","Ronald Fisher","Ronald Ross","Rosalind Franklin","Rudolf Christian Karl Diesel","Rudolf Virchow","Satyendra Nath Bose","Salim Ali","Sally Ride","Santiago Ramon y Cajal","Sergei Winogradsky","Sheldon Lee Glashow","Shintaro Hirase","Sigmund Freud","Srinivasa Ramanujan","Stephanie Kwolek","Stephen Jay Gould","Stephen Hawking","Steven Chu","Subrahmanyan Chandrasekhar","Svante Arrhenius","Sven Wingqvist","Thabit ibn Qurra","Thales of Miletus","Theodor Schwann","Theodosius Dobzhansky","Thomas Alva Edison","Thomas Burnet","Thomas Harriot","Thomas Hunt Morgan","Thomas Kuhn","Thomas Midgeley Jr.","Thomas Newcomen","Thomas Willis","Tim Noakes","Timothy John Berners-Lee","Trofim Lysenko","Tycho Brahe","Ukichiro Nakaya","Virginia Apgar","Vladimir Vernadsky","Walter Schottky","Walther Wilhelm Georg Bothe","Werner Heisenberg","Wernher Von Braun","Wilbur and Orville Wright","Wilhelm Ostwald","Wilhelm Röntgen","Wilhelm Wundt","Willard Frank Libby","Willard Gibbs","William Bayliss","William Buckland","William Gilbert","William Harvey","William Herschel","William Hopkins","William John Swainson","William Ramsay","William Smith","William Thomson","Wolfgang Ernst Pauli","Zora Neale Hurston"]
const domains = [
    'dk',
    'co',
    'it',
    'com',
    'co.uk',
    'edu.itu',
    'no',
    'se'
]
const numbers = ['0','1','2','3','4','5','6','7','8','9']

function phone(params) {
    const defaultParams = {
        digits: 8,
    }
    const opts = _.merge({}, defaultParams, params)
    return _.sampleSize(numbers, opts.digits).join('')
}
function zip(params) {
    const defaultParams = {
        digits: 4,
    }
    const opts = _.merge({}, defaultParams, params)
    return _.sampleSize(numbers, opts.digits).join('')
}
function domain(params) {
    return _.sample(domains)
}
function name(params) {
    const defaultParams = {
        count: 1,
        seperator: ' ',
    }
    const opts = _.merge({}, defaultParams, params)
    return _.sampleSize(names, opts.count).join(opts.seperator)
}
function word(params) {
    const defaultParams = {
        count: 1,
        seperator: ' ',
        capitalize: true,
    }
    const opts = _.merge({}, defaultParams, params)
    return _.sampleSize(words, opts.count).join(opts.seperator).capitalize()
}
function email(params) {
    return `${name().replace(/ /g, '.')}@${word()}.${domain()}`.toLowerCase()
}
function line() {
    return _.sample(lines)
}
function image() {
    return 'http://lorempixel.com/650/350'
}
function html(params) {
    const defaultParams = {
        tags: ['p'],
        images: 0,
        lines: 3,
    }
    const opts = _.merge({}, defaultParams, params)
    const pickedLines = _.sampleSize(lines, opts.lines)
    const result = _.map(pickedLines, (l, index) => {
        const tag = _.sample(opts.tags)
        let imageTag = ''
        if (index < opts.images) {
            imageTag = `<img src="${image()}" alt="${line()}"/>`
        }
        return `<${tag}>${l}</${tag}>${imageTag}`
    })
    return _.shuffle(result).join('')
}
export default {
    html,
    email,
    zip,
    domain,
    name,
    image,
    phone,
    word,
    line,
}
