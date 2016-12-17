/* @flow */

const $ = require('jquery');
const React: any = require('react');

function levelsDeepToString(levelsDeep: number): string {
  var ret: string = '';
  for (var i: number = 0; i < levelsDeep; i++) {
    ret += '-';
  }
  return ret;
}

function renderEntryWithLevelsDeep(
  title: string,
  description: string,
  levelsDeep: number,
) {
  return (
    <div>
      <b>{levelsDeepToString(levelsDeep)} {title}</b>: {description}
    </div>
  );
}

function renderEntry(title: string, description: string) {
  return renderEntryWithLevelsDeep(title, description, 0);
}

function renderArrayWithTitle(array: array, title: string) {
  return(
    <div key={title}>
      {renderEntry(title, array.join(', '))}
    </div>
  );
}

function renderDictionaryWithTitleAndLevelsDeep(dictionary: Object, title: ?string, levelsDeep: number) {
  return(
    <div>
      {title != null ? <b>{title}:</b> : <div></div>}
      {
        Object.keys(dictionary).map(function(key: string) {
          const value = dictionary[key];
          if (value.attributes != null) {
            return renderDictionaryWithTitleAndLevelsDeep(value.attributes, key, levelsDeep+1);
          } else if (Array.isArray(value)) {
            return renderArrayWithTitle(value, key);
          } else {
            return renderEntryWithLevelsDeep(key, value, levelsDeep);
          }
        })
      }
    </div>
  );
}

function renderDictionaryWithTitle(dictionary: Object, title: ?string) {
  return renderDictionaryWithTitleAndLevelsDeep(dictionary, title, 0);
}

function renderDictionary(dictionary: Object) {
  return renderDictionaryWithTitle(dictionary, null)
}

type CharacterProps = {
  dataType: string,
  dataUrl: string,
};

export default class Character extends React.Component {
  props: CharacterProps;

  state: {
    armorClass: string,
    class: string,
    equipment: {},
    hitDice: string,
    languages: [],
    level: string,
    maxHP: string,
    name: string,
    proficiency: string,
    race: string,
    senses: [],
    speed: string,
  }

  constructor(props: CharacterProps): void {
    super(props);
    this.state = {
      armorClass: '',
      class: '',
      equipment: {},
      hitDice: '',
      languages: [],
      level: '',
      maxHP: '',
      name: '',
      proficiency: '',
      race: '',
      senses: [],
      speed: '',
    };
  }

  loadData(): void {
    $.ajax({
      url: this.props.dataUrl,
      dataType: this.props.dataType,
      cache: true,
      success: function(data): void {
        this.setState({
          armorClass: data.armorClass,
          class: data.class,
          equipment: data.equipment,
          hitDice: data.hitDice,
          languages: data.languages,
          level: data.level,
          maxHP: data.maxHP,
          name: data.name,
          proficiency: data.proficiency,
          race: data.race,
          senses: data.senses,
          speed: data.speed,
        });
      }.bind(this),
      error: function(xhr, status, err): void {
        console.error(this.props.dataUrl, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount(): void {
    this.loadData();
  }

  render() {
    if (this.state.name != null) {
      return (
        <div>
          <h3>General</h3>
          {renderEntry('Name', this.state.name)}
          {renderEntry('Race', this.state.race)}
          {renderEntry('Class', this.state.class)}
          <br />

          {renderEntry('Proficiency', this.state.proficiency)}
          {renderEntry('Level', this.state.level)}
          {renderEntry('Armor Class', this.state.armorClass)}
          {renderEntry('Max HP', this.state.maxHP)}
          {renderEntry('Hit Dice', this.state.hitDice)}
          {renderEntry('Speed', this.state.speed)}
          <br />

          {
            this.state.senses != null ?
              renderArrayWithTitle(this.state.senses, 'Senses') :
              <div></div>
          }
          {
            this.state.languages != null ?
              renderArrayWithTitle(this.state.languages, 'Languages') :
              <div></div>
          }
          <br />

          <h3>Equipment</h3>
          {
            this.state.equipment != null ?
              renderDictionary(this.state.equipment) :
              <div></div>
          }
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
};
